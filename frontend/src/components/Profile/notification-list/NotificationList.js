import React, { PureComponent } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import NotificationListItem from './NotificationListItem'

import { setNotificationNumber } from '../../../actions/notification'
import { unreadNotifications } from '../../../urls'
import { connect } from 'react-redux'

class NotificationList extends PureComponent {
    
    renderList = () => {
        // debugger
        return this.props.notifications.map(notification => <NotificationListItem {...notification} key={notification.id} />)
    }

    componentDidMount() {
        fetch(unreadNotifications)
        .then(res => res.json())
        .then(data => {
            // debugger
            this.props.setNotificationNumber(data.count)
        })
    }
    
    render() {
        // debugger
        // console.log(this.state.events)
        // debugger
        return this.props.notifications.length === 0 ?
            <h1>No notifications</h1>
            :
            <ListGroup >
                {this.renderList()}
            </ListGroup>
    }
}

export default connect(state => ({notifications: state.notifications}), { setNotificationNumber })(NotificationList)