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
import Button from 'react-bootstrap/Button'
import './games.css'

// urls
import { initialDiscoverURL, fetchEventsURL } from '../urls'




class Explore extends Component {

    state = {
      isLoading: true,
      isLoadingMore: false,
      noMoreResults: false,
      type: 'games',
      eventType: 'All types',
      types: null,
      games: [],
      groups: [],
      city: 'Houston',
      state: 'TX',
      searchTerm: ''
    }

    handleLoadMore = () => {

      this.setState({
        isLoadingMore: true
      }, this.loadMore)
    }

    loadMore = () => {
      let itemsCount
      this.state.type === 'games' ? itemsCount = this.state.games.length : itemsCount = this.state.groups.length
      if (itemsCount < 9) {
        this.handleFetch(fetchEventsURL, {
          events_count: 18,
          type: this.state.type,
          city: this.state.city,
          searchTerm: this.state.searchTerm,
          eventType: this.state.eventType,
          state: this.state.state
        })
      } else {
        this.handleFetch(fetchEventsURL, {
          events_count: itemsCount + 9,
          type: this.state.type,
          city: this.state.city,
          searchTerm: this.state.searchTerm,
          eventType: this.state.eventType,
          state: this.state.state
        })
      }
      
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
      return decks.length === 0 ? <h1>No groups yet</h1> : decks
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
              events_count: 9,
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
          this.setState({
            isLoading: true
          }, () => this.setState({isLoading: false, isLoadingMore: false, games: data.games, types: data.types, city: data.city, state: data.state, type: data.type}))
          
        } else {
          this.setState({
            isLoading: true
          }, () => this.setState({isLoading: false, isLoadingMore: false, groups: data.groups, types: data.types, city: data.city, state: data.state, type: data.type}))
          
        }
      })
    }

    componentDidMount() {
      this.handleFetch(initialDiscoverURL, {
        events_count: 9,
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
          return <EventList style={{padding: '0 20px 20px 20px', width: '100%'}} events={this.state.games} eventtype='games'/>
        case 'groups':
          return this.renderGroupDeck()
        default: 
          return null
      }
    }

    handleOnSelect = e => {
      this.setState({eventType: e})
      this.handleFetch(fetchEventsURL, {
        events_count: 9,
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
        events_count: 9,
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


    // handle 'games' and 'groups' type change
    handleSwitchType = type => {

      this.handleFetch(fetchEventsURL, {
        events_count: 9,
        type: type,
        city: this.state.city,
        searchTerm: this.state.searchTerm,
        eventType: this.state.eventType,
        state: this.state.state,
      })
    }

    render() {

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
                  <div style={{margin: 'auto 20px auto 40px' }}>
                  <DropdownButton
                    size="lg"
                    title={this.state.eventType}
                  > 
                    <Dropdown.Item style={{fontSize: '20px', padding: '22px'}} onSelect={this.handleOnSelect} eventKey='All types'>All types</Dropdown.Item>
                    {!!this.state.types ? this.renderAllTypes() : <LoadingAnimation />}
                  </DropdownButton>
                  </div>
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
                        style={{margin: 'auto 20px', maxWidth: '240px', width: '100%'}}
                        className='form-control'
                      />
                  </StandaloneSearchBox>
                  <form style={{margin: 'auto 20px'}} className='search-box' onSubmit={this.handleSearch}>
                      <input className='search-txt' type='text' onChange={this.handleOnChangeName} placeholder='Search by name'/>
                      <button className='search-btn' type='submit'>
                        <i class="fas fa-search"></i>
                      </button>
                  </form>
                  
            </div>
          </div>
          <div className='result-container'>
            { this.state.isLoading ? <LoadingAnimation /> : this.showPage()}
            <div style={{width: '50%', marginBottom: '30px', marginTop: '15px'}}>
            {
              this.state.isLoadingMore ? <LoadingAnimation /> : <Button onClick={this.handleLoadMore} style={{width: '100%'}}>Load more</Button>
            }
            </div>
          </div>
      </div>
        )
    }
}

export default Explore