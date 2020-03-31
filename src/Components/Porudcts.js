import React from 'react'
import { connect } from 'react-redux'
import { addStuff,removeStuff } from '../Redux/Action'
import {useSelector,useDispatch} from "react-redux"
import DisplayProducts from './DisplayProducts'
import LastItem from "./LastItem"

 
 function Porudcts(props) {
   const products = useSelector(state => state.products)
   const basket = useSelector ( state => state.basket)
   const dispatch = useDispatch()
  lastItemYouAdd(basket)
  console.log(temp)
  
   return (
     <div>
      <table>
      <th style ={{width : "1400px"}}>
        {
          products.map((product,index) => (
            <div class="container">
              <div class="row">
              <div class="col">
            
            <DisplayProducts

            brand = {product.brand}
            photo = {product.photo}
            title = {product.title}
            index = {product.index}
            price = {product.price}
            addStatus = {product.addStatus}
            openBasketPage = {props.openBasketPage}

            />
            </div>
            </div>
            </div>
          ))
        }
       </th>
       <th style = {{width : "300px"}}>
        { lastVissible &&
         <LastItem temp = {temp}/>
         }
       </th>
      </table>
     </div>
   )
 }

 let lastVissible
 let temp
 const lastItemYouAdd = (basket) =>{
   if(basket[basket.length-1]==undefined){
     lastVissible = false;
   }
   else {
     lastVissible = true;
      temp = basket[basket.length-1]
    }
 }
 
 


export default Porudcts
