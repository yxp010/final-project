import React, {PureComponent} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import GameModal from '../GameModal'
import Button from 'react-bootstrap/Button'

class EventListItem extends PureComponent {

    state = {
        modalShow: false,
    }
    modalClose = () => {this.setState({modalShow: false})}
    showModal = () => {this.setState({modalShow: true})}

    render() {
        console.log(this.props)
        const { eventtype, id, handleCancel } = this.props
        return(
            <React.Fragment>
                <div style={{marginBottom: '10px'}}>
                    <ListGroup.Item action onClick={this.showModal} style={{fontSize: '25px'}}>
                        <h1 >{this.props.name}</h1>
                        <span style={{fontSize: '18px'}}>{this.props.location}</span><br></br>
                        <span style={{fontSize: '18px'}}>{this.props.date}</span>
                    </ListGroup.Item>
                    {!!handleCancel ? <Button variant="danger" size="lg" style={{width: '100%'}} onClick={() => handleCancel(eventtype, id)}>Cancel</Button> : null}
                    {this.state.modalShow ? <GameModal show={this.state.modalShow} showfooter={'false'} onHide={this.modalClose} info={this.props}/> : null}
                </div>
            </React.Fragment>
        )
    }
}
    

export default EventListItem