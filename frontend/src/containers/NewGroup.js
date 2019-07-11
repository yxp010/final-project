import React, { Component } from 'react'
import NavbarContainer from './NavbarContainer'
import ErrorBox from '../components/ErrorBox'

// redux
import { connect } from 'react-redux'

class NewGroup extends Component {

    state = {
       group: {
        name: '',
        imgURL: '',
        location: '',
        type_id: ''
        },
        error: ''
    }

    handleChange = e => {
        this.setState({
            group: {
                ...this.state.group,
                [e.target.name]: e.target.value 
            }
        })
    }

    handleCreate = e => {
        e.preventDefault()
        // fetch google api to get getmetry location (lat & lng)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.group.location}&key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY`)
        .then(res => res.json())
        .then(data => {
            if (data.status !== 'OK') {
                // To do: show error text
                // show address is not correct error
                console.log('error')
            } else {
                debugger
                fetch('http://localhost:3001/groups', {
                    method: 'POST',
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        group: {
                            name: this.state.group.name,
                            type_id: this.state.group.type_id,
                            location: data.results[0].formatted_address,
                            city: data.results[0].address_components.find(c => c.types.find(t => t === "locality")).long_name,
                            state: data.results[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1")).short_name,
                            lat: data.results[0].geometry.location.lat,
                            lng: data.results[0].geometry.location.lng,
                            zip_code: data.results[0].address_components.find(c => c.types.find(t => t === "postal_code")).short_name
                        },
                        imgURL: this.state.imgURL
                    })
                })
                .then(res => res.json()) 
                .then(data => {
                    if (!this.props.loggedIn) {
                        this.props.history.push('/login')
                    } else if (!!data.error) {
                        this.setState({error: data.error})
                    } else {
                        console.log(data)
                    }
                })
                .catch(err => {
                    // show validation error from backend
                    console.log('err: ', err)
                })
            }
        })
    }

    render() {
        return (<div>
            <NavbarContainer />
            <form onSubmit={this.handleCreate}>
                <input type='text' name='name' onChange={this.handleChange} placeholder='Enter group name'/>
                <input type='text' name='imgURL' onChange={this.handleChange} placeholder='Enter image url' required/>
                <input type='text' name='location' onChange={this.handleChange} placeholder='Enter location' required/>
                <input type='text' name='type_id' onChange={this.handleChange} placeholder='Enter type' required/>
                <input type='submit' value='Create group'/>
            </form>
            {this.state.error.length > 0 ? <ErrorBox message={this.state.error}/> : null}
        </div>)
    }
}

export default connect(state => ({loggedIn: state.loggedIn}))(NewGroup)