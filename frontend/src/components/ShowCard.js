import React from 'react'
import CardInfo from '../components/CardInfo'
import GameModal from './GameModal'

class ShowCard extends React.Component {

  state = {
    modalShow: false,
    modalContainerShow: false
  }

  modalClose = () => {
    this.setState({ 
      modalShow: false,
      modalContainerShow: false 
    })
  };
  
  showModal = () => {this.setState({modalShow: true, modalContainerShow: true})}
  render() {
    // debugger
    return (
      <React.Fragment>
      <CardInfo showModal={this.showModal}/>
      {this.state.modalContainerShow ? <GameModal show={this.state.modalShow} onHide={this.modalClose} info={this.props}/> : null}
      </React.Fragment>
  )
  }
}

export default ShowCard