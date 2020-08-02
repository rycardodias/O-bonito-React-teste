import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
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
        const nome = 'Ricardo Dias'
        if (this.state.email === emailTemp && this.state.password === passwordTemp) {
            this.props.loginHandler(true, 'Cozinha', nome)
        }
    }

    render() {
        return (
            <div>
                <div className="field">
                    <input className="input" name='email' onChange={this._handleChange} type="email" placeholder="Email" />
                </div>
                <div className="field">
                    <input className="input" name='password' onChange={this._handleChange} type="password" placeholder="Palavra-passe" />
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-success" onClick={this._handleSubmit}>Entrar</button>
                    </p>
                </div>
            </div>
        )
    }
}
