import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Map from '../components/Map'

class GroupModal extends PureComponent {

    showDirection = () => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(this.props.location)}`)
    }

    handleClickDetail = () => {
        window.location.assign(`/groups/${this.props.id}`)
    }

    render() {
      return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
          <h1 id="contained-modal-title-vcenter">
            {this.props.name}
          </h1>
        </Modal.Header>
        <Modal.Body>
            <div className='map'>
                <Map 
                    center={{lat: this.props.lat, lng: this.props.lng}} 
                    isMarkerShown 
                />
            </div>
          <Button onClick={this.showDirection}>show direction</Button>
          <h4>Hosted by {}</h4>
          {/* <h4>{date}</h4> */}
          <p>
            {this.props.description}
          </p>
          
        </Modal.Body>
        <Button onClick={this.handleClickDetail}>Detail</Button>
        {
            this.props.handleLeaveGroup ?
            <Button onClick={() => this.props.handleLeaveGroup(this.props.id)} variant="danger">Leave Group</Button>
          : 
          null
          }
      </Modal>
      );
    }
  }

export default GroupModal
  