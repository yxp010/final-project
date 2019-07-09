import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Map from '../components/Map'
import { baseURL } from '../urls'

class GameModal extends PureComponent {

    handleCancelJoin = () => {
      fetch(baseURL + `/${this.props.info.eventtype}/cancel`, {
        method: 'DELETE',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({id: this.props.info.id})
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
        }
      })
      .catch(err => {
        console.log('Error: ', err)
      })
    }

    checkShowFooter = () => {
      return this.props.showfooter === 'true' ? true : false
    }

    handleJoin = () => {
      fetch(baseURL + `/${this.props.info.eventtype}/join`, {
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({id: this.props.info.id})
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          switch (data.error) {
            case 'You have joined this event':
              console.log("joined before: ", data)
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
        }
      })
      .catch(err => {
        console.log('Error: ', err)
      })
    }

    showDirection = () => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(this.props.info.location)}`)
    }

    render() {
      console.log(this.props)
      return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
          <h1 id="contained-modal-title-vcenter">
            Ping Pong
          </h1>
        </Modal.Header>
        <Modal.Body>
            <div className='map'>
                <Map 
                    center={{lat: this.props.info.lat, lng: this.props.info.lng}} 
                    isMarkerShown 
                />
            </div>
          <Button onClick={this.showDirection}>show direction</Button>
          <h4>Hosted by {}</h4>
          {/* <h4>{date}</h4> */}
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        {this.checkShowFooter() ?
        <Modal.Footer>
        <h1>Join?</h1>
        <Button onClick={this.handleJoin}>YES</Button>
        <Button onClick={this.handleCancelJoin}>NO</Button>
      </Modal.Footer>
      : null
        }
        {
          !!this.props.handleLeaveGroup ?
          <Modal.Footer>
          <Button variant="danger" onClick={() => this.props.handleLeaveGroup(this.props.info.id)}>Leave Group</Button>
      </Modal.Footer>
          : null
        }
      </Modal>
      );
    }
  }

export default GameModal
  