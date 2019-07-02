import React, {Component} from 'react';
import NavbarContainer from './containers/NavbarContainer'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

// urls


import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { setLocation } from './actions/users'

const SeeAll = (props) => <Link to={props.url} className='see-all'>See all</Link>
class Home extends Component {

  askLocation = () => {
    // debugger
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        debugger
        this.props.setLocation(pos)
      }, err => {
        // handleLocationError(true, infoWindow, map.getCenter());
        console.log("error: ", err)
      }, {maximumAge:60000, timeout: 5000, enableHighAccuracy: true});
    } else {
      console.log("Browser doesn't support Geolocation")
      // this.handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  componentDidMount() {
    this.askLocation()
  }

  render() {
      if (!!this.props.nearByLocations) {
        console.log(this.props.nearByLocations.groups)
        console.log(this.props.nearByLocations.tournaments)
        console.log(this.props.nearByLocations.games)
      }
      return (
        <React.Fragment>
        <div className="App">
          <NavbarContainer />
          <ButtonToolbar>
          <Link to='/games' className='btn btn-primary btn-lg'>
            Games
          </Link>
          <Link to='/tournaments' className='btn btn-primary btn-lg'>
          Tournaments
          </Link>
        </ButtonToolbar>
        </div>
        <div className='card-deck-container'>
          <div className='card-deck-info-container'>
            <h3>Pickup games near you</h3>
            <SeeAll url='/games'/>
          </div>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
            </div>


            <div className='card-deck-container'>
          <div className='card-deck-info-container'>
            <h3>Tournaments near you</h3>
            <SeeAll url='/tournaments' />
          </div>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
            </div>
            <div className='card-deck-container'>
          <div className='card-deck-info-container'>
            <h3>Groups near you</h3>
            <SeeAll url='/groups' />
          </div>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
            </div>
        </React.Fragment>
      );
  }
}

export default connect(state => ({latLng: state.latLng, nearByLocations: state.nearByLocations}), { setLocation })(Home);
