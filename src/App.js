import React, { Component } from 'react'
import  {Provider} from "react-redux"
import CreateStore from './Redux/CreateStore'
import Header from "./Components/Header"
import Products from "./Components/Porudcts"
import style from "./App.css"
import BasketPage from "./Components/BasketPage"


 class App extends Component {
   state = {
     mainPageVissible : true,
     basketPageVissible : false
   }
   openBasketPage = state => {
     this.setState({
       basketPageVissible : true,
       mainPageVissible : false
     }
      )
   }
   openMainPage = state => {
    this.setState({
      basketPageVissible : false,
      mainPageVissible : true
    })
  }
  render() {
   
    return (
      <Provider store = {CreateStore}>
      <div>
       
          <Header  openBasketPage = {this.openBasketPage} openMainPage = {this.openMainPage} />
          { this.state.basketPageVissible && <BasketPage/>}
          { this.state.mainPageVissible &&  <Products/>}
        
      </div>
      </Provider>
    )
  }
}

export default App

