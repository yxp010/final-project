import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = props => {
    return(
            <div className='landing-page'>
                <div className='page-content'>
                  <h1>MyWebsite</h1>
                  <p>Some info of the website blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                  <div className='page-buttons'>
                    <Link to='/games' >
                      Games
                    </Link>
                    <Link to='/tournaments' >
                    Tournaments
                    </Link>
                  </div>
                </div>
            </div>
    )
}

export default LandingPage