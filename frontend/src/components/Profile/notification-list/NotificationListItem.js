import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

//urls
import { readNotification, unreadNotification } from '../../../urls' 

class NotificationListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notification: props
        }
    }

    handleRead = () => {
        fetch(readNotification(this.state.notification.id), {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({notification: data.notification})
        })
    }

    handleUnread = () => {
        fetch(unreadNotification(this.state.notification.id), {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({notification: data.notification})
        })
    }

    render() {
        const { notification_type, has_read, message, created_at, has_check, id } = this.state.notification
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
                                notification_type === 'check' && !this.props.has_check
                                ?
                                <React.Fragment>
                                <Button onClick={() => this.props.handleAccept(id)} style={{marginRight: '10px'}} variant="success"><i className="fas fa-user-check"></i></Button>
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

export default NotificationListItem