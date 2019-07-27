import React, { PureComponent } from 'react'
import Card from 'react-bootstrap/Card'

//urls
import { fetchGameUsers, fetchGroupUsers } from '../urls'


export default class CardInfo extends PureComponent {

    state = {
      usersCount: 0
    }

    isGroupCard = () => {
      return this.props.isGroupCard === 'true' ? true : false
    }

    formatTypeName = () => {
      return this.props.type_name.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ')
    }

    componentDidMount() {
      fetch(this.typeURL()(this.props.id))
      .then(res => res.json())
      .then(data => {
        // debugger
        this.setState({usersCount: data.users.length})
      })

    }

    typeURL = () => {
      // debugger
      return this.isGroupCard() ? fetchGroupUsers : fetchGameUsers
    }

    render() {
        return( 
        <div onClick={this.props.showModal} className='card' style={{marginLeft: '27px', marginRight: '27px', cursor: 'pointer', maxWidth: '330px', width: '100%'}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh', backgroundColor: 'black'}}>
            <Card.Img variant="top" src={this.props.img_url} style={{maxHeight: '100%', maxWidth: '100%'}} alt='Some img here'/>
        </div>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{this.formatTypeName()}</Card.Subtitle>
          <h2>{this.props.name}</h2>
          <Card.Text>
             {this.isGroupCard() ?
                `${this.state.usersCount} people in this group.`
              :
                `${this.state.usersCount} people will come to this game.`
              }
          </Card.Text>
        </Card.Body>
        {this.props.type === 'groups' || !this.props.type ?
            null
        :
            <Card.Footer>
            <small className="text-muted">{this.props.date}</small>
          </Card.Footer>
        }
        
      </div>
        )
    }
}