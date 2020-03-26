import React from 'react'
import { connect } from 'react-redux'
import { addStuff,removeStuff } from '../Redux/Action'
import {useSelector,useDispatch} from "react-redux"
import DisplayProducts from './DisplayProducts'


 
 function Porudcts(props) {
   const products = useSelector(state => state.products)
   const basket = useSelector ( state => state.basket)
   const dispatch = useDispatch()

  
   return (
     <div>
      
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

           />
           </div>
           </div>
           </div>
         ))
       }
      
     </div>
   )
 }
 
 


export default Porudcts
