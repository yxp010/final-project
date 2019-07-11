import CardDeck from 'react-bootstrap/CardDeck'
import { Link } from 'react-router-dom'
import React from 'react'

import { connect } from 'react-redux'

import ShowCard from '../components/ShowCard'

const SeeAll = (props) => <Link to={props.url} className='see-all'>See all</Link>

const NearbyCardDeck = props => {

    return(
        <div className='card-deck-container'>
          <div className='card-deck-info-container'>
            <h3 style={{marginLeft: '15px'}}>{props.title} near you</h3>
            <SeeAll url='/explore'/>
          </div>
          <CardDeck >
              {!!props.nearByLocations 
              ? 
              props.nearByLocations[props.type].map(card => <ShowCard showfooter='true' eventtype={props.type} key={card.id} {...card} type={props.type} />)
              :
              // [1,2,3].map(n => <ShowCard key={n}/>)
              null
              }
          </CardDeck>
            </div>
    )
}

export default connect(state => ({nearByLocations: state.nearByLocations}))(NearbyCardDeck)