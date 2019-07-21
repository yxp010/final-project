import React, { Component } from 'react'
// import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
// Components
import NavbarContainer from './NavbarContainer'
import LoadingAnimation from '../components/LoadingAnimation'
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox"
import EventList from '../components/event-list/EventList'
import GroupDeck from '../components/Profile/GroupDeck'
// import EventListItem from '../components/Profile/notification-list/NotificationListItem'
//bootstrap
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './games.css'

// urls
import { initialDiscoverURL, fetchEventsURL } from '../urls'




class Explore extends Component {

    state = {
      type: 'games',
      eventType: 'All types',
      types: null,
      games: [],
      groups: [],
      city: 'Houston',
      state: 'TX',
      searchTerm: ''
    }

    renderGroupDeck = () => {
      let decks = []
      let currentGroups = [] 
      this.state.groups.forEach(group => {
          currentGroups.push(group)
          if (currentGroups.length === 3) {
              decks.push(<GroupDeck groups={currentGroups}/>)
              currentGroups = []
          }
      });
      if (currentGroups.length > 0) {
          decks.push(<GroupDeck groups={currentGroups}/>)
      } 
      return decks
  }

    SearchBoxWillMount = () => {
      const refs = {}
      return {
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          if (places[0].address_components.find(c => c.types.find(t => t === "locality")) && places[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1"))) {
            this.handleFetch(fetchEventsURL, {
              events_count: 10,
              type: this.state.type,
              city: places[0].address_components.find(c => c.types.find(t => t === "locality")).long_name,
              state: places[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1")).short_name,
              searchTerm: this.state.searchTerm,
              eventType: this.state.eventType
            })

          }

        },
      }
    }

    componentWillMount() {
      this.onSearchProps = this.SearchBoxWillMount()
    }

    handleFetch = (url, option) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(option),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }

      })
      .then(res => res.json())
      .then(data => {
        if (data.games) {
          this.setState({games: data.games, types: data.types, city: data.city, state: data.state, type: data.type})
        } else {
          this.setState({groups: data.groups, types: data.types, city: data.city, state: data.state, type: data.type})
        }
      })
    }

    componentDidMount() {
      this.handleFetch(initialDiscoverURL, {
        events_count: 10,
        type: this.state.type,
        city: this.state.city,
        searchTerm: this.state.searchTerm,
        eventType: this.state.eventType,
        state: this.state.state
      })
    }

    showPage = () => {
      switch(this.state.type) {
        case 'games':
          return <EventList style={{padding: '100px'}} events={this.state.games} eventtype='games'/>
        case 'groups':
          return this.renderGroupDeck()
        default: 
          return null
      }
    }

    handleOnSelect = e => {
      this.setState({eventType: e})
      this.handleFetch(fetchEventsURL, {
        events_count: 10,
        type: this.state.type,
        city: this.state.city,
        searchTerm: this.state.searchTerm,
        eventType: e,
        state: this.state.state
      }
      )
    }

    renderAllTypes = () => {
      return this.state.types.map((t, id) => {
        return <Dropdown.Item style={{fontSize: '20px', padding: '22px'}} key={id} onSelect={this.handleOnSelect} eventKey={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</Dropdown.Item>
      })
    }

    handleSearch = e => {
      e.preventDefault()
      this.handleFetch(fetchEventsURL, {
        events_count: 10,
        type: this.state.type,
        city: this.state.city,
        searchTerm: this.state.searchTerm,
        eventType: this.state.eventType,
        state: this.state.state,
      })
    }

    handleOnChangeName = e => {
      this.setState({searchTerm: e.target.value})
    }

    handleSwitchType = type => {
      this.handleFetch(fetchEventsURL, {
        events_count: 10,
        type: type,
        city: this.state.city,
        searchTerm: this.state.searchTerm,
        eventType: this.state.eventType,
        state: this.state.state,
      })
    }

    render() {
        console.log(this.state.games)
        console.log(this.state.groups)
        return (
        <div>
          <NavbarContainer />
          <div id='header-container'>
            <div id='index-header'>
                  <h1>Find your next game</h1>
            </div>
            <div id='search-container' style={{display: 'flex'}}>
                  <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton onChange={() => this.handleSwitchType('games')} variant="dark" value={1} style={{padding: '22px'}}>Games</ToggleButton>
                    <ToggleButton onChange={() => this.handleSwitchType('groups')} variant="dark" value={2} style={{padding: '22px'}}>Groups</ToggleButton>
                  </ToggleButtonGroup>
                  <div>
                  <DropdownButton
                    size="lg"
                    title={this.state.eventType}
                  > 
                    <Dropdown.Item style={{fontSize: '20px', padding: '22px'}} onSelect={this.handleOnSelect} eventKey='All types'>All types</Dropdown.Item>
                    {!!this.state.types ? this.renderAllTypes() : <LoadingAnimation />}
                  </DropdownButton>
                  </div>
                  <form onSubmit={this.handleSearch}>
                      <input type='text' placeholder='Search by name' onChange={this.handleOnChangeName}/>
                      <input type='submit' />
                  </form>
                  <StandaloneSearchBox 
                    ref={this.onSearchProps.onSearchBoxMounted}
                    onPlacesChanged={this.onSearchProps.onPlacesChanged}
                    options={{
                      types: ['(cities)'],
                      componentRestrictions: {country: "us"}
                     }}
                  >
                    <input
                        type="text"
                        placeholder={`${this.state.city}, ${this.state.state}`}
                        style={{
                          boxSizing: `border-box`,
                          border: `1px solid transparent`,
                          width: `240px`,
                          height: `32px`,
                          padding: `0 12px`,
                          borderRadius: `3px`,
                          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                          fontSize: `14px`,
                          outline: `none`,
                          textOverflow: `ellipses`,
                        }}
                      />
                  </StandaloneSearchBox>
            </div>
          </div>
            {this.showPage()}
      </div>
        )
    }
}

export default Explore