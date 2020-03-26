import React, { Component } from 'react'

export default class Header extends Component {
    
    render() {
     return (
            <div>
                <nav class="navbar navbar-inverse">
                  <div class="container-fluid">
                 <div class="navbar-header">
                <a class="navbar-brand" href="#">Welcome to My Shop App But Don't Forget This is a Prototype</a>
                </div>
                <ul class="nav navbar-nav">
                <li onClick = {this.props.openMainPage} class="active"><a href="#">Home</a></li>
                <li onClick = {this.props.openBasketPage} ><a href="#">My Basket</a></li>
                </ul>
            </div>
            </nav>
            
            <div class="container">
            </div>

            </div>
        )
    }
}
