import React, { Component } from 'react'

import logoIcon from '../images/logoIcon.png'

const NavbarBurger = props => (
    <button
        onClick={props.toggleMenu}
        className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
    >
        <span />
        <span />
        <span />
    </button>
);

export default class Navbar extends Component {
    state = {
        navComponent: '',
        activeMenu: false,
    }

    _handleClick = (e) => {
        this.props.onClickResult(e.target.name)
        this.toggleMenu()
    }

    toggleMenu = () => {
        this.setState({
            activeMenu: !this.state.activeMenu,
        })
    }

    render() {
        return (
            <nav className='navbar' role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a class="navbar-item"><img onClick={this._handleClick} name='home' src={logoIcon} style={{ height: '30px' }} /></a>
                    <NavbarBurger
                        active={this.state.activeMenu}
                        toggleMenu={this.toggleMenu} />
                </div>
                <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <a class="navbar-item" onClick={this._handleClick} name='galeria'>Galeria</a>
                        <a class="navbar-item" onClick={this._handleClick} name='produtos'>Produtos</a>
                        <a class="navbar-item" onClick={this._handleClick} name='contacto'>Contacto</a>
                    </div>
                    <div class="navbar-end">
                        {this.props.loginStatus
                            ? <a class="navbar-item" onClick={this._handleClick} name='logout'>Sair</a>
                            : <a class="navbar-item" onClick={this._handleClick} name='login'>Entrar</a>}
                    </div>
                </div>
            </nav>
        );
    }
}
