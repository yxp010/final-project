import React from 'react'
import Card from 'react-bootstrap/Card'


const ShowCard = props => {
  return (
      <div onClick={() => console.log(2)} className='card' style={{marginLeft: '27px', marginRight: '27px', cursor: 'pointer'}}>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/729829/screenshots/4272534/galshir-pingpong-slow-motion.gif" style={{height: '305px'}} alt='Some img here'/>
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

export default ShowCard