import React, { PureComponent } from 'react'
import NavBarContainer from './NavbarContainer'
import LoadingAnimation from '../components/LoadingAnimation'
import ImageBox from '../components/ImageBox'
import Button from 'react-bootstrap/Button'


//sub page component
import SubPage from '../components/GroupShowSubPages/SubPage'


import { connect } from 'react-redux'
import { storeViewingPage } from '../actions/locations'

import { baseURL, joinGroup } from '../urls'

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
                <div>
                    {!!this.state.group ?
                    <div>
                        <ImageBox img={this.state.group.img_url}/>
                        <h2>{this.state.group.city}, {this.state.group.state}</h2>
                        <h2>{this.state.members.length} member(s)</h2>
                        <h2>Created by <a href='#'>{this.state.founder.username}</a></h2>
                        <Button disabled={this.state.disableJoin} onClick={this.handleJoin} variant="outline-primary">Join</Button>
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
