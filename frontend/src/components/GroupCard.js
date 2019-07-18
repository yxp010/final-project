import React, { PureComponent } from 'react'
import CardInfo from './CardInfo'
import GroupModal from './GroupModal'

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
    return (
      <React.Fragment>
      <CardInfo showModal={this.showModal} isGroupCard='true' {...this.props}/>
      {this.state.modalShow ? <GroupModal handleLeaveGroup={this.props.handleLeaveGroup} show={this.state.modalShow} onHide={this.modalClose} {...this.props}/> : null}
      </React.Fragment>
  )
  }
}

export default GroupCard