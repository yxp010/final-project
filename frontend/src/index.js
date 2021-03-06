import React from 'react';
import ReactDOM from 'react-dom';
// key: 'AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY'
// import 'semantic-ui-css/semantic.min.css'
// css
import './index.css';
import './loading.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Redux
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'

// Components
import Home from './Home';
import LoginContainer from './containers/LoginContainer'
import SignupContainer from './containers/SignupContainer'
import Explore from './containers/Explore'
import Tournaments from './containers/Tournaments'
import Groups from './containers/Groups'
import GroupShowPage from './containers/GroupShowPage'
import Account from './components/Account'
import Profile from './components/Profile'
// Create New Component Containers
import NewGroup from './containers/NewGroup'
import NewTournament from './containers/NewTournament'
import NewGame from './containers/NewGame'
// import CreateModal from './components/CreateModal'

const routing = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={ Home } />
                {/* <Route path='/create/:type' component={ CreateModal } /> */}
                <Route path='/explore' component={ Explore } />
                <Route path='/new_group' component={ NewGroup } />
                <Route path='/new_game' component={ NewGame } />
                <Route path='/new_tournament' component={ NewTournament } />
                {/* <Route exact path='/games' component={ Games } /> */}
                <Route exact path='/groups' component={ Groups } />
                <Route path='/groups/:id' component={ GroupShowPage } />
                <Route path='/tournaments' component={ Tournaments } />
                <Route path='/login' component={ LoginContainer } />
                <Route path='/signup' component={ SignupContainer } />
                <Route path='/account' component={ Account }/>
                <Route path='/users/:username' component={ Profile } />
            </Switch>
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
