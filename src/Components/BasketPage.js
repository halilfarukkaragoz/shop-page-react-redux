import React from 'react'
import {useSelector} from "react-redux"
import DisplayProducts from './DisplayProducts'
import DisplayBasketProducts from "./DisplayBasketProducts"


export default function BasketPage(props) {
    const basket = useSelector(state => state.basket)
    const products = useSelector(state => state.products)
    basketArray(basket,products)
    let productsVissible
    if (basket.length == 0 ) productsVissible = false
    else productsVissible = true

    
    productsDisplay(numberArray,products)
    console.log(numberArray,objectArray)
        return (
        <div >
            <br></br>
        
        
       { productsVissible ? <div> 
        <h2 style= {{textAlign:"center"}}>Products you added to your basket </h2>
           
        <table >
            <th >
            { objectArray.map((product,index) => (
            <DisplayBasketProducts
            index = {product.index}
            title = {product.title}
            photo = {product.photo}
            numberArray = {numberArray}/>
        )
        )}
            </th>
            
            <th>
            <img style = {{ display: "block", marginLeft: "auto", marginRight: "auto", width: "30%"}} src ="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-shopping-feed-ecommerce-final.jpg?s62EBQOnC4qV09Acw1HbgMps0o9l4Q0D&itok=yderrDik" alt = "..." ></img>
            <br></br>
            <button onClick = {props.openMainPage} class = "btn btn-dark" style = {{ display: "block", marginLeft: "auto", marginRight: "auto", width: "20"}} >Keep Shopping</button>
           <br></br>
  
                <img style = {{ display: "block", marginLeft: "auto", marginRight: "auto", width: "30%"}} src ="https://blog.mozilla.org/firefox/files/2018/11/Black-Friday-Headline.png" alt = "..." ></img>
                <br></br>
                <button class = "btn btn-dark" style = {{ display: "block", marginLeft: "auto", marginRight: "auto", width: "20"}} >Pay</button>
            </th>
        </table>
       </div> :<div> 
           <table>
               <th>
       <h2 style = {{marginLeft : 200}}>Basket is Empty</h2> 
       </th>
       <th>
       <img style = {{marginLeft : 100}} src ="https://mobitek.com/wp-content/uploads/2019/11/Google-alisveris-reklamlari-400x250.png" ></img>
       </th>
       <th>
       <button onClick = {props.openMainPage} class ="btn btn-dark" style = {{marginLeft : 100}} >Keep Shopping</button>
       </th>
       </table></div>}
            
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

