import React, { Component } from 'react'
import NavbarContainer from './NavbarContainer'

// url
import {groupsURL} from '../urls'
// import {userGroups} from '../urls'


class Groups extends Component {
    
    componentDidMount() {
        fetch(groupsURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {
        return (<div>
            <NavbarContainer />
            <h1>Groups</h1>
        </div>)
    }
}

export default Groups