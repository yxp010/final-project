import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import TimePicker from 'react-time-picker' 
import DatePicker from 'react-date-picker'
import {createGame} from '../../urls'

export default class NewGame extends React.Component {

    constructor() {
        super()
        const newDate = new Date()
        this.state = {
            time: '10:00',
            date: newDate,
            year: newDate.getFullYear(),
            month: newDate.getMonth() + 1,
            day: newDate.getDate(),
            type: 1
        }
    }
    

    dateOnChange = date => {
        this.setState({ 
            date: date,
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
         })
    }
    timeOnChange = time => this.setState({ time })
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelectType = e => {
        this.setState({
            type: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // debugger
        console.log(this.state)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY`)
        .then(res => res.json())
        .then(data => {
            if (data.status !== 'OK') {
                // To do: show error text
                // show address is not correct error
                console.log('error')
            } else {
            fetch(createGame, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    time: this.state.time,
                    date: this.state.date,
                    year: this.state.year,
                    month: this.state.month,
                    day: this.state.day,
                    name: this.state.name,
                    type: this.state.type,
                    location: data.results[0].formatted_address,
                    city: data.results[0].address_components.find(c => c.types.find(t => t === "locality")).long_name,
                    state: data.results[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1")).short_name,
                    lat: data.results[0].geometry.location.lat,
                    lng: data.results[0].geometry.location.lng,
                    zip_code: data.results[0].address_components.find(c => c.types.find(t => t === "postal_code")).short_name
                })
            })
        }})
    }

    render() {
        // debugger
        return <React.Fragment>
            <TimePicker onChange={this.timeOnChange} value={this.state.time}/>
      <DatePicker onChange={this.dateOnChange} value={this.state.date}/>
        <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={this.handleChange} name='name' placeholder="Enter name" />
          </Form.Group>
          <Form.Group>
          <Form.Label>Select a type</Form.Label>
            <Form.Control onChange={(e) => console.log(e.target.value)} as="select">
            {!!this.props.types ? this.props.types.map(t => <option value={t.id}>{t.name}</option>) : null}
        </Form.Control>
        </Form.Group>
        </Form.Row>
      
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Location</Form.Label>
          <Form.Control onChange={this.handleChange} name='location' placeholder="1234 Main St" />
        </Form.Group>
        
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
      </React.Fragment>
    }
}