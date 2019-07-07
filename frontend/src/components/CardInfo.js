import React, { PureComponent } from 'react'
import Card from 'react-bootstrap/Card'

export default class CardInfo extends PureComponent {
    render() {
        console.log('rerendered')
        return( 
        <div onClick={this.props.showModal} className='card' style={{marginLeft: '27px', marginRight: '27px', cursor: 'pointer'}}>
        <Card.Img variant="top" src="https://s20642.pcdn.co/wp-content/uploads/2014/03/table-tennis-1039299_1280.jpg" style={{height: '305px'}} alt='Some img here'/>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">event type here</Card.Subtitle>
          <h2>event name here</h2>
          <Card.Text>
             1000 people comming
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Date</small>
        </Card.Footer>
      </div>
        )
    }
}