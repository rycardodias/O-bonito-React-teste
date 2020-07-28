import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
// import Footer from './components/Footer'


import Body from './pages/Body'


class App extends Component {
  state = {
    isLoggedIn: false,
    navComponent: 'Home'
  }

  _onChangeNavBarHandler = (e) => {
    this.setState({ navComponent: e })
    // altera o estado do login quando usa botao de sair
    if (e === 'Logout') {
      this.setState({
        isLoggedIn: false,
        navComponent: 'Home'
      })
    }
  }

  _onChangeLoginInHandler = (login, component) => {
    this.setState({
      isLoggedIn: login,
      navComponent: component
    })
  }

  render() {
    return (
      <div className='app'>
        <Navbar navbarHandler={this._onChangeNavBarHandler} loginResult={this.state.isLoggedIn} navComp={this.state.navComponent} />
        <Switch>
          <Route exact path='/'>
            <Body
              navComponentResult={this.state.navComponent}
              loginResult={this.state.isLoggedIn}
              loginInHandler={this._onChangeLoginInHandler} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
