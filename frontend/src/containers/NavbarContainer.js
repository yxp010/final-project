import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CreateModal from '../components/CreateModal'
// import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

//action
import { login, logout } from '../actions/users'

//url
import { checkLogin, logoutURL } from '../urls'

class NavbarContainer extends Component {

    state = {
        showModal: false
    }



    componentDidMount() {
        fetch(checkLogin, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            // debugger
            if (!data.error) {
                this.props.login(data.username)
                // if (this.props.setUser) this.props.setUser(data.id)
            } else {
                if (this.props.changePage) this.props.changePage()
            }
        })
    }

    handleLogout = () => {
        fetch(logoutURL, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(() => {
            this.props.logout()
        })
    }

    modalClose = () => {
        this.setState({ 
          showModal: false
        })
      };

    render() {
        return <div className='nav-bar'>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#101D2E'}} variant="dark">
            <Link to='/' className='navbar-brand'>MeetBallers</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    {/* <NavDropdown title="Create" id="collasible-nav-dropdown">
                        <Link to='/create/group' className='dropdown-item'>New Group</Link>
                        <Link to='/create/group' className='dropdown-item'>New Game</Link>
                    </NavDropdown> */}
                    <Nav.Link href="#" onClick={() => this.setState({showModal: true})}>Create</Nav.Link>
                        <Link to='/explore' className='nav-link'>Explore</Link>
                        {this.props.loggedIn 
                        ?
                        <Link onClick={this.handleLogout} to='' className='nav-link'>
                            Log out
                        </Link>
                        :
                        <Link to='/login' className='nav-link'>
                            Log in
                        </Link>
                           }
                        {this.props.loggedIn
                        ?
                        // <NavDropdown title="Account" id="collasible-nav-dropdown">
                        //     <Link to={`/users/${this.props.username}`} className='dropdown-item'>Profile</Link>
                        <Link to='/account' className='nav-link'>Account</Link>    
                        // </NavDropdown>
                        :
                        <Link to='/signup' className='nav-link'>
                             Sign up
                        </Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            { this.state.showModal ? <CreateModal show={this.state.showModal} onHide={this.modalClose}/> : null}
        </div>
    }
    
}

export default connect(state => ({loggedIn: state.loggedIn, username: state.username}), { login, logout } )(NavbarContainer)