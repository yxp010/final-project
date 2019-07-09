import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import NotificationListItem from './NotificationListItem'

class NotificationList extends Component {
    
    renderList = () => {
        // debugger
        return this.props.notifications.map(notification => <NotificationListItem handleAccept={this.props.handleAccept} {...notification} key={notification.id} />)
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

export default NotificationList