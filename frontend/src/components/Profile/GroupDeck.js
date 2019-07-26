import CardDeck from 'react-bootstrap/CardDeck'
import React from 'react'
import GroupCard from '../GroupCard'
const EmptyCard = () => <div className='card' style={{border: 'none', marginLeft: '27px', marginRight: '27px', maxWidth: '330px', width: '100%'}}></div>

const renderCards = (groups, type, handleLeaveGroup) => {
    const groupsNeed = 3 - groups.length
    const cards = []
    groups.forEach(group => {
        cards.push(<GroupCard handleLeaveGroup={handleLeaveGroup} showfooter={'groupdeck'} key={group.id} {...group} type={type} />)
    });
    for (let i = 0; i < groupsNeed; i++) {
        cards.push(EmptyCard())
    }
    return cards
}

const GroupDeck = props => {
    // debugger
    return(
        <div className='card-deck-container' style={{padding: '0px 20px 20px 20px'}}>
            <CardDeck style={{width: '100%'}}>
                {props.groups.length === 3
                ? 
                props.groups.map(group => <GroupCard handleLeaveGroup={props.handleLeaveGroup} key={group.id} {...group} type={props.type} />)
                :
                renderCards(props.groups, props.type, props.handleLeaveGroup)
                }
            </CardDeck>
        </div>
    )
}

export default GroupDeck