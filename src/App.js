import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Login from './components/Login'

import Home from './pages/Home'


class App extends Component {
  state = {
    isLoggedIn: false,
    navComponent: 'home'
  }

  onChangeLoginInHandler = (e) => {
    this.setState({ isLoggedIn: e })
  }

  onChangeNavBarHandler = (e) => {
    this.setState({ navComponent: e})
    // altera o estado do loggin quando usa botao de sair
    if (e === 'logout') { 
      this.setState({ isLoggedIn: false })
    }
  }

  render() {    
    return (
      <div className='app'>
        <Navbar onClickResult={this.onChangeNavBarHandler} loginStatus={this.state.isLoggedIn}/>
        <Switch>
          <Route exact path='/'>
            {this.state.navComponent === 'home' ? <Home onLoginResult={this.onChangeLoginInHandler} /> : null}
            {this.state.navComponent === 'login' ? <Login onLoginResult={this.onChangeLoginInHandler} /> : null}
          </Route>
          {/*<Route path='/detail/:movieId' component={Detail} />
          <Route component={NotFound} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
