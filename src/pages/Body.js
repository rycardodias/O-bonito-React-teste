import React, { Component } from 'react'

import Home from '../components/Home'
import Login from '../components/Login'
import Cozinha from '../components/Cozinha'

export default class Body extends Component {

    onChangeLoginInHandler = (login, component) => {
        this.props.loginInHandler(login, component)
    }

    render() {
        return (
            <section className='hero is-fullheight-with-navbar'>
                {this.props.navComponentResult === 'Home' ? <Home /> : null}
                {this.props.navComponentResult === 'Login' ? <Login loginHandler={this.onChangeLoginInHandler}/> : null}

                {/* Componentes de utilizador */}
                {this.props.navComponentResult === 'Cozinha' ? <Cozinha /> : null}

            </section>
        )
    }
}
