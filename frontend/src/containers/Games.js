import React, { Component } from 'react'
import NavbarContainer from './NavbarContainer'
import { Link } from 'react-router-dom'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class Games extends Component {

    constructor(props) {
      super(props)
      if (props.currentPageType) {
        this.state = {
          currentPageType: props.currentPageType
        }
      } else {
        this.state = {
          currentPageType: ''
        }
      }
    }

    selectType = e => {
      this.setState({
        currentPageType: e.target.name
      })
    }

    showPage = () => {
      switch(this.state.currentPageType) {
        case 'games':
          return <h1>Games list (have sort, search, filter funtionality)</h1>
        case 'tournaments':
          return <h1>Tournaments list (have sort, search, filter funtionality)</h1>
        case 'groups':
          return <h1>Groups grid</h1>
        default: 
          return <h1>Games list (have sort, search, filter funtionality)</h1>
      }
    }

    render() {
        return (
        <div>
          <NavbarContainer />
          <h3>Style later</h3><br></br>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={this.selectType} name="games" className="btn btn-secondary">Games</button>
            <button onClick={this.selectType} name="tournaments" className="btn btn-secondary">Tournaments</button>
            <button onClick={this.selectType} name="groups" className="btn btn-secondary">Groups</button>
          </div>
            {this.showPage()}
      </div>
        )
    }
}

export default Games