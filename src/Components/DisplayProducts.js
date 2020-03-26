import React from 'react'
import {useDispatch} from "react-redux"
import { addStuff,removeStuff } from '../Redux/Action'
export default function DisplayProducts(props) {
    const dispatch = useDispatch()
 
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
                            <button onClick = { () => dispatch(addStuff(props.index))} style = {{width : "15%" }} class = "btn btn-dark">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
  
                        
                        