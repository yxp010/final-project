import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

// actions
import { connect } from 'react-redux'
import { setNotifications, acceptNotification, unreadNotification, readNotification } from '../../../actions/notification'


import { acceptToGroup } from '../../../urls'
//urls
import { readNotificationURL, unreadNotificationURL } from '../../../urls' 

class NotificationListItem extends Component {

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
                this.props.acceptNotification(data.notifications, data.unread_notifications_count)
            } else {
                console.log(data)
            }
        })
    }

    handleRead = () => {
        fetch(readNotificationURL(this.props.id), {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.props.readNotification(data.notifications)
        })
    }

    handleUnread = () => {
        fetch(unreadNotificationURL(this.props.id), {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.props.unreadNotification(data.notifications)
        })
    }

    render() {
        const { notification_type, has_read, message, created_at, has_check, id } = this.props
        return(
            <React.Fragment>
                <div style={{marginBottom: '10px'}}>
                    <ListGroup.Item style={{fontSize: '25px'}}>
                        {has_read ? null : <i style={{color: 'red', marginRight: '10px'}} className="fas fa-circle"></i>}{message}<br></br>
                        <span style={{fontSize: '18px'}}>Date: {created_at}</span>
                        {
                        has_read ?
                            <div style={{marginTop: '10px', display: 'flex'}}>
                                <Button style={{marginRight: '10px'}} onClick={this.handleUnread} variant="primary">Unread</Button>                   
                            </div>
                        :
                        <div style={{marginTop: '10px', display: 'flex'}}>
                            <Button style={{marginRight: '10px'}} onClick={this.handleRead} variant="primary">Read</Button>
                            {
                                notification_type === 'check' && !has_check
                                ?
                                <React.Fragment>
                                <Button onClick={() => this.handleAccept(id)} style={{marginRight: '10px'}} variant="success"><i className="fas fa-user-check"></i></Button>
                                <Button style={{marginRight: '10px'}} variant="danger"><i className="fas fa-user-times"></i></Button>
                                </React.Fragment>
                                :
                                null
                            }                        
                            
                        </div>
                    }
                    </ListGroup.Item>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, { readNotification, unreadNotification, setNotifications, acceptNotification })(NotificationListItem)