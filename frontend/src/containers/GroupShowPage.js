import React, { PureComponent } from 'react'
import NavBarContainer from './NavbarContainer'
import LoadingAnimation from '../components/LoadingAnimation'
import ImageBox from '../components/ImageBox'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


//sub page component
import SubPage from '../components/GroupShowSubPages/SubPage'


import { connect } from 'react-redux'
import { storeViewingPage } from '../actions/locations'

import { baseURL, joinGroup } from '../urls'

const detailStyle = {
    display: 'flex',
    flexDirection: 'column-reverse',
    height: '100%'
}

class GroupShowPage extends PureComponent {

    state = {
        group: null,
        members: [],
        founder: null,
        disableJoin: false,
        currentSubPage: 'description',
        upcomingEvents: [],
    }

    componentDidMount() {
        fetch(baseURL + `groups/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                group: data.group,
                members: data.members,
                founder: data.founder,
                events: data.events,
                upcomingEvents: data.upcoming_events
            })
        })
    }

    handleJoin = () => {
        // If: the user has logged in, send apply to the organizer.
        // esle: store the current page in store, then redirect user to login page
        fetch(joinGroup, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                group_id: this.state.group.id
            })
        })
        .then(res => res.json())
        .then(data => {
            if (!!data.error) {
                this.props.storeViewingPage(`/groups/${this.state.group.id}`)
                this.props.history.push('/login')
            } else if (!!data.apply_error) {
                console.log('apply error: ', data)
                this.setState({disableJoin: true})
            } else if (!!data.founder_error) {
                console.log('founder err: ', data.founder_error)
                this.setState({disableJoin: true})
            } else {
                console.log('success', data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state)
        return(
            <React.Fragment>
                <NavBarContainer />
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {!!this.state.group ?
                    <div>
                        <div style={{
                            maxWidth: '80%',
                            width: '100%',
                            height: '50vh', 
                            display: 'flex',
                            alignItems: 'center',
                            margin: '30px auto'
                            }}>
                            <div style={{width: '60%', height: '100%'}}>
                                <Image style={{borderRadius: '9px', maxHeight: '100%', maxWidth: '100%', height: '100%', width: '100%'}} src={this.state.group.img_url}/> 
                            </div>    
                            <div style={{display: 'flex', flexDirection: 'column', height: '100%', marginLeft: '30px'}}>
                                <div style={detailStyle}>
                                    <h2>{this.state.group.city}, {this.state.group.state}</h2>
                                    <h2>{this.state.members.length} member(s)</h2>
                                    <h2>Created by <a href='#'>{this.state.founder.username}</a></h2>
                                </div>
                                <div style={detailStyle}>
                                    <Button disabled={this.state.disableJoin} onClick={this.handleJoin} variant="outline-primary">Join</Button>
                                </div>    
                            </div>
                        </div>
                        
                        <SubPage group={this.state.group} upcomingEvents={this.state.upcomingEvents}/>
                    </div>
                    : <LoadingAnimation />
                    }
                    
                </div>
            </React.Fragment>
        )
    }
}

export default connect(state => ({loggedIn: state.loggedIn}), { storeViewingPage })(GroupShowPage)
