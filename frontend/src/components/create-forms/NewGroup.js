import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {states} from '../../statesData'

import { groupsURL } from '../../urls'

export default class NewGame extends React.Component {

    state = {
      group: {
        type_id: 1,
        description: '',
        img_url: '',
        name: '',
        city: '',
        state: ''
      }
    }

    handleSubmit = e => {
      e.preventDefault()
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.group.city},${this.state.group.state}&key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY`)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          // debugger
          if (data.status !== 'OK' || this.state.group.city.length === 0 || this.state.group.state.length !== 2) {
            // To do: show error text
            // show address is not correct error
            console.log('City or state cannot be empty')
          } else if (!data.results[0].address_components.find(c => {
            if (c.types.includes('locality') && (c.long_name.toLowerCase().replace(/ /g, '') === this.state.group.city.toLowerCase().replace(/ /g, '') || c.short_name.toLowerCase().replace(/ /g, '') === this.state.group.city.toLowerCase().replace(/ /g, ''))){
                return true
            } else {
              return false
            }
          })) {
            console.log('Please enter valid city or state')
          }  else {
          fetch(groupsURL, {
              method: 'POST',
              credentials: "include",
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                group: {
                  ...this.state.group,
                  city: data.results[0].address_components.find(c => c.types.find(t => t === "locality")).long_name,
                  state: data.results[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1")).short_name
                }
              })
          })
      }
    })
  }

    handleChange = e => {
      this.setState({
        group: {
          ...this.state.group,
          [e.target.name]: e.target.value
        }
      })
    }

    renderStateOptions = () => {
      return Object.keys(states).map(state => <option>{state}</option>)
    }

    handleStateChange = e => {
      this.setState({
        group: {
          ...this.state.group,
          state: e.target.value
        }
      })
    }

    handleSelectType = e => {
      this.setState({
          group: {
            ...this.state.group,
            type_id: parseInt(e.target.value)
          }
      })
    }

    render() {
        // console.log(this.state)
        return <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={this.handleChange} name='name' placeholder="Enter name" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Select a type</Form.Label>
              <Form.Control onChange={this.handleSelectType} as="select">
                {!!this.props.types ? this.props.types.map(t => <option value={t.id}>{t.name}</option>) : null}
              </Form.Control>
          </Form.Group>
        </Form.Row>
      
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={this.handleChange} name='city'/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" onChange={this.handleStateChange}>
              <option>Choose state</option>
              {this.renderStateOptions()}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group >
          <Form.Label>Image Url</Form.Label>
          <Form.Control onChange={this.handleChange} name='img_url' />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control name='description' onChange={this.handleChange} as="textarea" rows="3" />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    }
}