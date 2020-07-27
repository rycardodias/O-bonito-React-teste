import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        isLoggedIn: false
    }

    _handleChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    _handleSubmit = () => {
        const emailTemp = 'rycardo.dias@hotmail.com'
        const passwordTemp = '1'
        if (this.state.email === emailTemp && this.state.password === passwordTemp) {
            this.setState({ isLoggedIn: true })
            this.props.onLoginResult(true)
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.isLoggedIn}</p>
                <div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" name='email' onChange={this._handleChange} type="email" placeholder="Email" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" name='password' onChange={this._handleChange} type="password" placeholder="Palavra-passe" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success" onClick={this._handleSubmit}>Entrar</button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
