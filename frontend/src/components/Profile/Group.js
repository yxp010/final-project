import React, { PureComponent } from 'react'
import {userGroups} from '../../urls'
import LoadingAnimation from '../LoadingAnimation'

import GroupDeck from './GroupDeck'

// url
import { leaveGroup } from '../../urls'

class Group extends PureComponent {

    state = {
        groups: null,
        loading: true
    }

    componentDidMount() {
        fetch(userGroups)
        .then(res => res.json())
        .then(data => {
            // debugger
            this.setState({
                groups: data.groups,
                loading: false
            })
        })
    }

    handleLeaveGroup = id => {
        fetch(leaveGroup(id), {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            // debugger
            if (!!data.error) {
                switch (data.error) {
                    case 'not logged in':
                        this.props.history.push('/login')
                        break
                    case "Cannot leave group that you created, you can delete the group in 'groups created by you' in menu on the left.":
                        console.log(data.error)
                        break
                    default:
                        console.log(data.error)
                        return
                }
            } else if (!!data.no_group_error) {
                console.log(data.no_group_error)
            } else {
                this.setState({
                    groups: this.state.groups.filter(group => group.id !== id),
                })
            }
        })
    }

    renderGroupDeck = () => {
        let decks = []
        let currentGroups = [] 
        this.state.groups.forEach(group => {
            currentGroups.push(group)
            if (currentGroups.length === 3) {
                decks.push(<GroupDeck handleLeaveGroup={this.handleLeaveGroup} groups={currentGroups}/>)
                currentGroups = []
            }
        });
        if (currentGroups.length > 0) {
            decks.push(<GroupDeck handleLeaveGroup={this.handleLeaveGroup} groups={currentGroups}/>)
        } 
        return decks
    }

    render() {
        return this.state.loading ?
        <LoadingAnimation />
        :
        this.renderGroupDeck()
    }
}

export default Group