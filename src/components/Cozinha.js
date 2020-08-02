import React, { Component } from 'react'
import DetalheCozinha from './DetalheCozinha'

export default class Cozinha extends Component {
    state = {
        buttonIndex: null
    }

    _onButtonIndexHandler = (e) => {
        this.setState({
            buttonIndex: e
        })
    }

    _handleClick = (e) => {
        this.setState({
            buttonIndex: e.target.id
        })
    }

    render() {
        const modulos = ['Gestão Stock', 'Refeições', 'Ementas', 'Gestão Limpeza', 'Histórico Refeições', 'Horários']

        const itens = modulos.map(
            (modulo, index) =>
                <div class="column is-one-third">
                    <button
                        id={index}
                        onClick={this._handleClick}
                        style={{ width: '100%', height: '100%' }}>{modulo}</button>
                </div>
        )

        if (this.state.buttonIndex === null) {
            return (
                <div class="columns is-multiline is-mobile">
                    {itens}
                </div>
            )
        }

        return (
            <DetalheCozinha buttonIndexResult={this.state.buttonIndex} buttonIndexHandler={this._onButtonIndexHandler} />
        )
    }
}