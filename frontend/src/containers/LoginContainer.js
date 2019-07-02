import React, { Component } from 'react'
import { loginURL } from '../urls'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavbarContainer from './NavbarContainer'
import { login } from '../actions/users'

class LoginContainer extends Component {

    state = {
        username: '',
        password: '',
        isLoading: false,
    }

    handleChange = e => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })  
    }

    handleClick = () => {
        this.setState({isLoading: !this.state.isLoading,})
        const info = {username: this.state.username, password: this.state.password}
        // debugger
        fetch(loginURL, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(obj => {
            if (obj.error) {
                this.setState({ isLoading: !this.state.isLoading })
            } else {
                this.setState({ isLoading: !this.state.isLoading })
                this.props.login()
            }
            
        }, this)
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const { isLoading } = this.state
        // if (this.state.isLoggedIn) {
        //     return <Redirect to='/' />
        if (this.props.loggedIn) {
            this.props.history.push('/')
            return null
        } else {
            return <React.Fragment>
            <NavbarContainer />
            <div className='login-container'>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='username' name="username" placeholder="Enter username" onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Button
                    variant="primary"
                    disabled={isLoading}
                    onClick={!isLoading ? this.handleClick : null}
                >
                    {isLoading ? 'Loading…' : 'Log in'}
                </Button>
            </Form>
        </div>
        </React.Fragment>
        }
    }
}


export default connect(state => ({loggedIn: state.loggedIn}), { login })(LoginContainer); 