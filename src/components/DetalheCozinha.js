import React, { Component } from 'react'

export default class DetalheCozinha extends Component {
    _onBackButtonHandler = () => {
        this.props.buttonIndexHandler(null)
    }

    render() {
        return (
            <div>
                <button onClick={this._onBackButtonHandler}>Voltar</button>
                <h1>{this.props.buttonIndexResult}</h1>
            </div>
        )
    }
}
