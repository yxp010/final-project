import React, { PureComponent } from 'react'
import NavBarContainer from './NavbarContainer'
import { baseURL } from '../urls'

export default class GroupShowPage extends PureComponent {

    state = {
        data: null
    }

    componentDidMount() {
        fetch(baseURL + `groups/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                data
            })
        })
    }

    render() {
        console.log(this.state)
        return(
            <React.Fragment>
                <NavBarContainer />
                <div>
                    <h1>show page</h1>
                    {!!this.state.data ?
                    <div>
                    <h2>{this.state.data.name}</h2>
                    <h2>{this.state.data.description}</h2>
                    <h2>{this.state.data.founder_id}</h2>
                    <h2>{this.state.data.lat}</h2>
                    <h2>{this.state.data.lng}</h2>
                    <h2>{this.state.data.location}</h2>
                    </div>
                    : null
                    }
                    
                </div>
            </React.Fragment>
        )
    }
}
