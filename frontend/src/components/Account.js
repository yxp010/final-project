import React from 'react'
import NavbarContainer from '../containers/NavbarContainer'
import './profile.css'
//action
import { logout } from '../actions/users'
import { setNotificationNumber } from '../actions/notification'
import { connect } from 'react-redux'
// urls
import { logoutURL, unreadNotifications } from '../urls'

// components 
import ProfileInfo from './Profile/ProfileInfo'
import LoadingAnimation from './LoadingAnimation'
import EventList from './event-list/EventList'
import Group from './Profile/Group'
import Notifications from './Profile/Notifications'


class ProfilePage extends React.Component {

    state = {
        selectedSmenu: 'info',
    }

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
            case 'notifications':
                return <Notifications />
            default: 
                return <h1>info</h1>
        }
    }

    componentDidMount() {
        fetch(unreadNotifications)
        .then(res => res.json())
        .then(data => {
            this.props.setNotificationNumber(data.count)
        })
        
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
                            <li className='menu-item' style={{display: 'flex'}}>
                                <a name='notifications' href='#' className='menu-btn' onClick={this.switchContent}><i className="fas fa-bell"></i>Notifications</a>
                                {
                                    this.props.numberOfUnreadNotifications === 0 ? null : <span style={{color: '#d63031', marginRight: '10px', padding: '20px', fontSize: 18, cursor: 'pointer'}}>{this.props.numberOfUnreadNotifications}</span>
                                }
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

export default connect(state => ({loggedIn: state.loggedIn, numberOfUnreadNotifications: state.numberOfUnreadNotifications}), { logout, setNotificationNumber })(ProfilePage)