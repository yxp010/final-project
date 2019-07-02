import React, { Component } from 'react'
import { users } from '../urls'
import NavbarContainer from './NavbarContainer'

import { connect } from 'react-redux'

class SignupContainer extends Component {

    state = {
        userInfo: {
            username: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleChange = e => {
        console.log(e.target.value)
        console.log(this.state.username)
        this.setState({
            userInfo: {
                ...this.state.userInfo, 
                [e.target.name]: e.target.value
            }
        })  
    }

    handleCreate = () => {
        let info = this.state
        fetch(users, {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            debugger
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        if (this.props.loggedIn) {
            this.props.history.push('/')
            return null
        } else {
            return <div>
                <NavbarContainer />
                <input type='text' onChange={this.handleChange} name='username' placeholder='Username'/>
                <input type='password' onChange={this.handleChange} name='password' placeholder='Password'/>
                <input type='password' onChange={this.handleChange} name='passwordConfirm' placeholder='Confirm Password'/>
                <button onClick={this.handleCreate}>Create Account</button>
            </div>
        }
    }
}

export default connect(state => ({loggedIn: state.loggedIn}))(SignupContainer)