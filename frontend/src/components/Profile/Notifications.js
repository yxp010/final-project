import React, { PureComponent } from 'react'
// components 
import NotificationList from './notification-list/NotificationList'
import LoadingAnimation from '../LoadingAnimation'

// actions 
import {setNotifications} from '../../actions/notification'
import {connect} from 'react-redux'

import { userNotification } from '../../urls'

class Notifications extends PureComponent {

    state = {
        loading: true
    }

    componentDidMount() {
        fetch(userNotification)
        .then(res => res.json())
        .then(data => {
            if (!!data.error) {
                window.location.assign('/login')
            } else {
                // debugger
                this.props.setNotifications(data.notifications)
                this.setState({
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
            <NotificationList />
            </React.Fragment>
    }
}

export default connect(state => ({notifications: state.notifications}), { setNotifications })(Notifications)