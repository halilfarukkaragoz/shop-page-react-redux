import React from 'react'
import {useSelector} from "react-redux"
import DisplayProducts from './DisplayProducts'
import DisplayBasketProducts from "./DisplayBasketProducts"


export default function BasketPage() {
    const basket = useSelector(state => state.basket)
    const products = useSelector(state => state.products)
    basketArray(basket,products)
    let productsVissible
    if (basket.length == 0 ) productsVissible = false
    else productsVissible = true

    
    productsDisplay(numberArray,products)
    console.log(numberArray,objectArray)
        return (
        <div>
        
        
       { productsVissible ? <div> 
        <h2 style= {{textAlign:"center"}}>Products you added to your basket </h2>
           { objectArray.map((product,index) => (
            <DisplayBasketProducts
            index = {product.index}
            title = {product.title}
            photo = {product.photo}
            numberArray = {numberArray}/>
        )
        )}
       </div> : <h2 style = {{textAlign : "center"}}>Basket is Empty</h2> }
            
        </div>
    )
}
let k = 0
let numberArray = []
let objectArray = []
const basketArray = (basket,products) => {
    k=basket.length
    numberArray = [0]
    for (let i = 0 ; i<products.length ; i++){
        if(products.length != numberArray.length)
        numberArray.push(0)
        for (let k = 0 ; k<basket.length ; k++){
            if(products[i].index == basket[k].index) {
                numberArray[i] +=1 
            }
           
        }
    }
    
  
}

const productsDisplay = (numberArray,products) => {
    objectArray = []
    for(let i = 0 ; i<numberArray.length ; i++){
        if (numberArray[i] != 0 ){
            objectArray.push(products[i])
        }
    }
}

