import React, { Component } from 'react';
import Card from '../HomePage-Items/card'



export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Home Page</h1>
                </header>
                <Card />   
            </div>
        )
    }
}