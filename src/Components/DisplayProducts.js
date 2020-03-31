import React from 'react'
import {useDispatch} from "react-redux"
import { addStuff,removeStuff } from '../Redux/Action'


export default function DisplayProducts(props) {
    const dispatch = useDispatch()    
    let onclick = function(event){
       dispatch(addStuff(props.index))
        }
    return (
        <div>
            <br/>
            <div class="card mb-3" style ={{backgroundColor : "gray"}}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src = {props.photo} class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{props.brand}</h5>
                            <p class="card-text">{props.title}</p>
                            <button onClick = {onclick}  style = {{width : "15%" }} class = "btn btn-dark">Buy</button>
                            <br></br>
                            <br></br>
                            <br></br>
                            {props.addStatus && <div style = {{color : "white",marginLeft : "50px"}}>
                                <h5 >Added to the basket</h5>
                                <button onClick = {props.openBasketPage} class="btn btn-secondary" style = {{backgroundColor : "lightgray"}}>Check your basket</button>
                                </div>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
  
 

const outputDiv = () =>{
return (<h4 style = {{textAlign :"center",color : "red"}}>Added</h4>)
}
