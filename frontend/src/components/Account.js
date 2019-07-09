import React from 'react'
import NavbarContainer from '../containers/NavbarContainer'
import './profile.css'
//action
import { logout } from '../actions/users'
// urls
import { logoutURL } from '../urls'

import { connect } from 'react-redux';

// components 
import ProfileInfo from './Profile/ProfileInfo'
import LoadingAnimation from './LoadingAnimation'
import EventList from './event-list/EventList'
import Group from './Profile/Group'


class ProfilePage extends React.Component {

    state = {
        // user_id: null,
        selectedSmenu: 'info',
        // change: true
    }

    // setUser = user_id => {
    //     this.setState({user_id})
    // }

    handleLogout = () => {
        fetch(logoutURL, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(() => {
            this.props.logout()
        })
    }

    showData = () => {
        switch (this.state.selectedSmenu) {
            case 'info':
                return <ProfileInfo />
            case 'past games':
                return <EventList time='past' eventtype='games'/>
            case 'upcomming games':
                return <EventList time='upcoming' eventtype='games'/>
            case 'groups':
                return <Group />
            default: 
                return <h1>info</h1>
        }
    }

    switchContent = e => {
        this.setState({selectedSmenu: e.target.name})
    }

    changePage = () => {
        this.props.history.push('/login')
    }

  render() {

    return (
        <React.Fragment>
            <NavbarContainer setUser={this.setUser} changePage={this.changePage}/>
            {this.props.loggedIn ?
                <div className='profile-page'>
                    <div>
                    <div className='middle'>
                        <div className='menu'>
                            <li className='menu-item' id='profile'>
                                <a href='#profile' className='menu-btn'><i className="fas fa-id-card"></i>Profile</a>
                                <div className='smenu'>
                                    <a name='info' href="javascript:void(0);" onClick={this.switchContent}>Info</a>
                                    <a name='past games' onClick={this.switchContent} href='javascript:void(0);'>Past Games</a>
                                    <a name='upcomming games' onClick={this.switchContent} href='javascript:void(0);'>Upcomming Games</a>
                                    <a name='groups' onClick={this.switchContent} href='javascript:void(0);'>Groups</a>
                                </div>
                            </li>
                            <li className='menu-item'>
                                <a href='#' className='menu-btn'><i className="fas fa-bell"></i>Notifications</a>
                            </li>
                            <li className='menu-item' id='settings'>
                                <a href='#settings' className='menu-btn'><i className="fas fa-cogs"></i>Settings</a>
                                <div className='smenu'>
                                    <a href='javascript:void(0);'>Change Password</a>
                                    <a href='javascript:void(0);'>Change Email</a>
                                </div>
                            </li>
                            <li className='menu-item'>
                                <a href='javascript:void(0);' onClick={this.handleLogout} className='menu-btn'><i className="fas fa-sign-out-alt"></i>Log out</a>
                            </li>
                        </div>   
                    </div>
                    </div>
                    <div className='profile-content' >
                        {this.showData()}
                    </div>
                </div>
          :
          <LoadingAnimation />
        }
        </React.Fragment>
    )
  }

}

export default connect(state => ({loggedIn: state.loggedIn}), { logout })(ProfilePage)