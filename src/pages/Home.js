import React, { Component } from 'react'
import backgroudImage from '../images/cafe.jpg'

export default class Home extends Component {
    render() {
        return (
            <section className='hero is-fullheight-with-navbar'>
                <img src={backgroudImage} style={{maxWidth: '100%', height: 'auto'}} />
            </section>
        )
    }
}
