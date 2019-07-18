import React from 'react'
import CardInfo from '../components/CardInfo'
import GameModal from './GameModal'
import GroupModal from './GroupModal'

class ShowCard extends React.Component {
  state = {
    modalShow: false
  }

  modalClose = () => {
    this.setState({ 
      modalShow: false
    })
  };

  isGroupCard = () => {
    return this.props.eventtype === 'groups' ? 'true' : 'false'
  }
  
  showModal = () => {this.setState({modalShow: true})}
  render() {
    // debugger

    return (
      <React.Fragment>
      <CardInfo isGroupCard={this.isGroupCard()} showModal={this.showModal} {...this.props}/>
      {this.state.modalShow ? 
          this.props.eventtype == 'games' ?
          <GameModal show={this.state.modalShow} onHide={this.modalClose} info={this.props}/> 
          : <GroupModal show={this.state.modalShow} onHide={this.modalClose} {...this.props}/> 
          : null}
      </React.Fragment>
  )
  }
}

export default ShowCard