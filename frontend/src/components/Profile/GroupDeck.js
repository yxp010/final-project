import CardDeck from 'react-bootstrap/CardDeck'
import { Link } from 'react-router-dom'
import React from 'react'
import GroupCard from '../GroupCard'
const EmptyCard = () => <div className='card' style={{border: 'none'}}></div>

const renderCards = (groups, type, handleLeaveGroup) => {
    const groupsNeed = 3 - groups.length
    const cards = []
    groups.forEach(group => {
        cards.push(<GroupCard handleLeaveGroup={handleLeaveGroup} showfooter='false' key={group.id} {...group} type={type} />)
    });
    for (let i = 0; i < groupsNeed; i++) {
        cards.push(EmptyCard())
    }
    return cards
}

const GroupDeck = props => {
    // debugger
    return(
        <div className='card-deck-container'>
            <CardDeck >
                {props.groups.length === 3
                ? 
                props.groups.map(group => <GroupCard handleLeaveGroup={props.handleLeaveGroup} showfooter='false' key={group.id} {...group} type={props.type} />)
                :
                renderCards(props.groups, props.type, props.handleLeaveGroup)
                }
            </CardDeck>
        </div>
    )
}

export default GroupDeck