import React from 'react'
import CardInfo from '../components/CardInfo'
import GameModal from './GameModal'

class ShowCard extends React.Component {

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
      <CardInfo showModal={this.showModal} {...this.props}/>
      {this.state.modalShow ? <GameModal show={this.state.modalShow} showfooter={this.props.showfooter} onHide={this.modalClose} info={this.props}/> : null}
      </React.Fragment>
  )
  }
}

export default ShowCard