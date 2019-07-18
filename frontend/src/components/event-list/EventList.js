import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import EventListItem from './EventListItem'
import LoadingAnimation from '../LoadingAnimation'

// url
import { userTimeEvents, baseURL } from '../../urls'

class EventList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            time: props.time
        }
    }
    

    componentDidMount() {
        if (!!this.props.time) {
            // debugger
            fetch(userTimeEvents(this.props.time))
            .then(res => res.json())
            .then(data => {
                // debugger
                this.setState({
                    loading: false,
                    events: data.events
                })
            })
        } else {
            this.setState({loading: false})
        }
    }
    // showCard = id => {
    componentDidUpdate(prevProps, prevState) {
        if (!!this.props.time) {
            if (prevProps.time !== this.props.time) {
                fetch(userTimeEvents(this.props.time))
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        loading: false,
                        events: data.events,
                        time: this.props.time
                    })
                })
            }
        }
    }

    handleCancel = (eventtype, id) => {
        fetch(baseURL + `/${eventtype}/cancel`, {
            method: 'DELETE',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({id: id})
          })
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              switch (data.error) {
                case 'You have not joined this event yet':
                  console.log("You have not joined: ", data)
                  break
                case 'not loggin':
                  window.location.assign('/login')
                  break
                case 'You are the founder of this event':
                    console.log('You are the founder of this event')
                    break
                default:
                  return
              }
            } else {
              console.log('OK 200: ', data)
              this.setState({events: this.state.events.filter(e => e.id !== id)})
            }
          })
          .catch(err => {
            console.log('Error: ', err)
          })
    }
    renderLists = () => {
        // debugger
        if (this.props.time === 'upcoming') {
            return this.state.events.map(e => <EventListItem {...e} handleCancel={this.handleCancel} eventtype={this.props.eventtype} key={e.id} />)
        } else if (this.props.time === 'past') {
            return this.state.events.map(e => <EventListItem pastEvent='true' {...e} eventtype={this.props.eventtype} key={e.id} />)
        } else {
            return this.props.events.map(e => <EventListItem {...e} eventtype={this.props.eventtype} key={e.id} />)
        }
        
    }
    
    render() {

        // console.log(this.state.events)
        // debugger
        return this.state.loading ?
            <LoadingAnimation />
            : 
            (this.state.events && this.state.events.length === 0) || (!!this.props.events && this.props.events.length === 0) ?
            <h1>No games yet</h1>
            :
            <ListGroup style={{...this.props.style}}>
                {this.renderLists()}
            </ListGroup>
    }
}

export default EventList