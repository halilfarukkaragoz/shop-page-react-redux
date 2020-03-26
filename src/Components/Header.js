import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
export default class Header extends Component {
    
    render() {
     return (
       <div>
      <nav class="navbar navbar-dark bg-dark">
        <p style ={{fontSize : 25}} class= "navbar-text"> Welcome My Shopping Page And Don't Forget This Is Just A Prototype </p>
        <button onClick = {this.props.openMainPage} class="btn btn-secondary" style = {{backgroundColor : "gray" ,marginLeft : 900 }}>Home</button>
        <button onClick = {this.props.openBasketPage} class="btn btn-secondary" style = {{backgroundColor : "gray"}}>My Basket</button>
    </nav>
    </div>
        )
    }
}
