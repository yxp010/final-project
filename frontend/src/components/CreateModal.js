import React from 'react'
import Modal from 'react-bootstrap/Modal'
import NewGame from './create-forms/NewGame'
import NewGroup from './create-forms/NewGroup'
import Button from 'react-bootstrap/Button'
//urls
import {allTypeUrl} from '../urls'

class CreateModal extends React.Component {

    state = {
        type: 'game',
        types: []
    }

    componentDidMount() {
        fetch(allTypeUrl)
        .then(res => res.json())
        .then(data => {
            this.setState({
                types: data.types
            })
        })
    }

    handleSwitchType = e => {
        this.setState({
            type: e.target.name,

        })
    }

    handleCreate = () => {

    }

    render() {
        // debugger
        return <Modal
        size="lg"
        centered
        {...this.props}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
            <Modal.Title>Create new {this.state.type}</Modal.Title>  
        </Modal.Header>
        <div style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
            <div style={{marginBottom: '14px', width: '100%'}}>
                <Button style={{marginRight: '14px'}} variant="primary" onClick={this.handleSwitchType} name='game'>Create game</Button>
                <Button variant="primary" onClick={this.handleSwitchType} name='group'>Create group</Button>
            </div>
            
            {
                this.state.type === 'game' ?
                <NewGame types={this.state.types}/>
                : <NewGroup types={this.state.types}/>
            }
        </div>
      </Modal>
    }
}

export default CreateModal