import React from 'react'
import {useDispatch} from "react-redux"
import { addStuff,removeStuff } from '../Redux/Action'
export default function DisplayProducts(props) {
    const dispatch = useDispatch()
 
    return (
        <div >
            <div class="card" style={{width: "60rem",backgroundColor :"lightgray", margin : "auto"}}>
            <img style = {{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}} src= {props.photo} alt="Smiley face" height="333" width="333"/>
                <div class="card-body">
                    <h5 class="card-title"><p style = {{fontSize : 30,textAlign : "center"}} >{props.title} </p></h5>
                    <p class="card-text"><button onClick = {() => dispatch(addStuff(props.index)) } type="button" class="btn btn-info" style = {{marginLeft : 200}}>Add Basket</button></p>
                </div>
            </div>
        </div>
            
    )
}
  
                        
                        