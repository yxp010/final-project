import React, { PureComponent } from 'react'
import CardInfo from './CardInfo'
import GameModal from './GameModal'

class GroupCard extends PureComponent {

  state = {
    modalShow: false
  }

  modalClose = () => {
    this.setState({ 
      modalShow: false
    })
  };
  
  showModal = () => {this.setState({modalShow: true})}
  render() {
    // debugger
    return (
      <React.Fragment>
      <CardInfo showModal={this.showModal} eventtype={this.props.eventtype} isGroupCard='true' {...this.props}/>
      {this.state.modalShow ? <GameModal handleLeaveGroup={this.props.handleLeaveGroup} show={this.state.modalShow} showfooter={this.props.showfooter} onHide={this.modalClose} info={this.props}/> : null}
      </React.Fragment>
  )
  }
}

export default GroupCard