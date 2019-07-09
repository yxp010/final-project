import React, { Component } from 'react'
// components 
import NotificationList from './notification-list/NotificationList'
import LoadingAnimation from '../LoadingAnimation'

import { userNotification, acceptToGroup } from '../../urls'

class Notifications extends Component {

    state = {
        notifications: [],
        loading: true
    }

    handleAccept = notification_id => {
        fetch(acceptToGroup(notification_id), {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            // debugger
            if (data.status) {
                this.setState({
                    notifications: [...data.notifications]
                })
            } else {
                console.log(data)
            }
        })
    }

    componentDidMount() {
        fetch(userNotification)
        .then(res => res.json())
        .then(data => {
            if (!!data.error) {
                window.location.assign('/login')
            } else {
                this.setState({
                    notifications: data.notifications,
                    loading: false
                })
            }
        })
    }

    handleDelete = id => {

    }

    render() {
        return this.state.loading 
            ?
            <LoadingAnimation />
            :
            <React.Fragment>
            <div>
                Checkboxes
            </div>
            <NotificationList handleAccept={this.handleAccept} notifications={this.state.notifications}/>
            </React.Fragment>
    }
}

export default Notifications