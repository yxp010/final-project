import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import React from 'react'

import ShowCard from '../components/ShowCard'

const SeeAll = (props) => <Link to={props.url} className='see-all'>See all</Link>

const NearbyCardDeck = props => {

    return(
        <div className='card-deck-container'>
          <div className='card-deck-info-container'>
            <h3 style={{marginLeft: '15px'}}>{props.type} near you</h3>
            <SeeAll url='/games'/>
          </div>
          <CardDeck style={{width: '100%'}}>
              <ShowCard/>
              <ShowCard/>
              <ShowCard/>
          </CardDeck>
            </div>
    )
}

export default NearbyCardDeck