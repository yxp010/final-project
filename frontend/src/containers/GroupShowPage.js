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
                        <ImageBox img='https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/ironman-spiderman-homecoming-poster-frontpage-700x354.jpg'/>
                        <h2>{this.state.group.city}, {this.state.group.state}</h2>
                        <h2>{this.state.members.length} members</h2>
                        <h2>Created by {this.state.founder.username}</h2>
                        <h2>description: {this.state.group.description}</h2>
                        <h2>lat: {this.state.group.lat}</h2>
                        <h2>lng: {this.state.group.lng}</h2>
                        <h2>location: {this.state.group.location}</h2>
                        <Button disabled={this.state.disableJoin} onClick={this.handleJoin} variant="outline-primary">Primary</Button>
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
