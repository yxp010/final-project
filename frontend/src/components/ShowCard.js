import React from 'react'
import Card from 'react-bootstrap/Card'


const ShowCard = props => {
  return (
      <div className='card'>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/729829/screenshots/4272534/galshir-pingpong-slow-motion.gif" style={{height: '305px'}} alt='Some img here'/>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">event type here</Card.Subtitle>
          <h2>event name here</h2>
          <Card.Text>
             1000 people comming
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <large className="text-muted">Date</large>
        </Card.Footer>
        </div>
  )
}

export default ShowCard