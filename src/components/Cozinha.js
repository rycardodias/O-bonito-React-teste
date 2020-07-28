import React, { Component } from 'react'

export default class Cozinha extends Component {
    render() {
        const modulos = ['Gestão Stock', 'Refeições', 'Ementas', 'Gestão Limpeza', 'Histórico Refeições', 'Horários']

        const item = modulos.map(
            (modulo) =>
                <div class="column is-one-third">
                    <button style={{ width: '100%', height: '100%' }}>{modulo}</button>
                </div>
        )
        return (
            <div class="columns is-multiline is-mobile">
                {item}
            </div>
        )
    }
}