import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Map from '../components/Map'

class GameModal extends PureComponent {

    showDirection = () => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(this.props.info.location)}`)
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
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      );
    }
  }

export default GameModal
  