import React from 'react'
import LoadingAnimation from '../LoadingAnimation'
import { profile } from '../../urls'

class ProfileInfo extends React.PureComponent {

    state = {
        loading: true,
        user: {}
    }

    componentDidMount() {
        fetch(profile)
        .then(res => res.json())
        .then(user => {
            // debugger
            this.setState({
                loading: false,
                user
            })
        })
    }

    render() {
        console.log(this.state)
        return this.state.loading ?
            <LoadingAnimation />
        :
            <div>
                <h1>
                    {this.state.user.username}
                </h1>
                <p>has been {this.state.user.past_events} game(s).</p>
                <p>belongs to {this.state.user.groups_amount} group(s).</p>
            </div>
        
    }
    
        
}

export default ProfileInfo