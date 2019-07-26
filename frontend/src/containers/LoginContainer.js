import React, { Component } from 'react'
import { loginURL } from '../urls'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavbarContainer from './NavbarContainer'
import { login } from '../actions/users'

// css
// import '../login.css'

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
        if (this.props.loggedIn) {
            if (!!this.props.viewedPageBeforeLogin) {
                this.props.history.push(this.props.viewedPageBeforeLogin)
            } else {
                this.props.history.push('/')
            }
            return null
        } else {
            return <React.Fragment>
            <NavbarContainer />
            <div className='login-container'>
                <h1 style={{marginBottom: '25px', fontSize: '40px'}}>Log in</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='username' name="username" placeholder="Enter username" onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group>
                    <a href='#'>Forget password?</a>
                </Form.Group>
                <Form.Group>
                    <a href='#'>Create an account</a>
                </Form.Group>
                <Button
                    variant="primary"
                    disabled={isLoading}
                    onClick={!isLoading ? this.handleClick : null}
                    style={{width: '100%'}}
                >
                    {isLoading ? 'Loading…' : 'Log in'}
                </Button>
            </Form>
        </div>
        {/* <div className='login-container'>
            <h1>Log in</h1>
            <form>
                <div className='tbox'>
                    <input type='text' placeholder='@username' />
                </div>  
                <div className='tbox'>
                    <input type='text' placeholder='password' />
                </div>  
                <button className='login-btn' type='submit'>Log in</button>
            </form>
            <a className='login-b1' href='#'>Forget password?</a>
            <a className='login-b2' href='#'>Create a account</a>
        </div> */}
        </React.Fragment>
        }
    }
}


export default connect(state => ({loggedIn: state.loggedIn, viewedPageBeforeLogin: state.viewedPageBeforeLogin}), { login })(LoginContainer); 