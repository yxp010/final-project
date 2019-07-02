import React, { Component } from 'react'
import NavbarContainer from './NavbarContainer'
import Button from 'react-bootstrap/Button'

class NewGame extends Component {
    render() {
        return (<div>
            <NavbarContainer />
            <Button variant="outline-primary">Primary</Button>
        </div>)
    }
}

export default NewGame