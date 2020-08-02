import React, { Component } from 'react'

import logoIcon from '../images/logoIcon.png'

const NavbarBurger = props => (
    <button onClick={props.toggleMenu} className={`button navbar-burger ${props.active ? 'is-active' : ''}`}>
        <span /><span /><span />
    </button>
);

export default class Navbar extends Component {
    state = {
        activeMenu: false,
    }

    _handleClick = (e) => {
        this.props.navbarHandler(e.target.name)
        this.setState({
            activeMenu: false
        })
    }

    _toggleMenu = () => {
        this.setState({
            activeMenu: !this.state.activeMenu,
        })
    }

    render() {
        return (
            <nav className='navbar' role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a class="navbar-item">
                        <img
                            alt='logo'
                            onClick={this._handleClick}
                            name={this.props.loginResult ? 'Cozinha' : 'Home'}
                            src={logoIcon} style={{ height: '30px' }} />
                    </a>
                    <NavbarBurger
                        active={this.state.activeMenu}
                        toggleMenu={this._toggleMenu} />
                </div>
                <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
                    {/* Verifica o loginResult para mostrar apenas a navegacao necessaria */}
                    {this.props.loginResult
                        ?
                        < div class="navbar-end">
                            <a class="navbar-item">{this.props.userResult}</a>
                            <a class="navbar-item" onClick={this._handleClick} name='Logout'>Sair</a>
                        </div>
                        : <>
                            <div className="navbar-start">
                                <a class="navbar-item" onClick={this._handleClick} name='Galeria'>Galeria</a>
                                <a class="navbar-item" onClick={this._handleClick} name='Produtos'>Produtos</a>
                                <a class="navbar-item" onClick={this._handleClick} name='Contacto'>Contacto</a>
                            </div>
                            <div class="navbar-end">
                                <a class="navbar-item" onClick={this._handleClick} name='Login'>Entrar</a>
                            </div>
                        </>
                    }
                </div>
            </nav >
        );
    }
}
