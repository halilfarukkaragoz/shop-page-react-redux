import React from 'react'
import {useDispatch} from "react-redux"
import {removeStuff} from "../Redux/Action"

export default function DisplayBasketProducts(props) {
    const dispatch = useDispatch()
    console.log(props)
    return (
        <div >
            <div  style={{width: "49rem", margin : "auto"}}>
            <img style = {{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}} src= {props.photo} alt="Smiley face" height="333" width="333"/>
                <div class="card-body">
                    <h5 class="card-title"><p style = {{fontSize : 30,textAlign : "center"}} >{props.title} - {props.numberArray[props.index]} </p></h5>
    
                    <button class="btn btn-secondary" onClick = {()=> dispatch(removeStuff(props.index))} style = {{display: "block", marginLeft: "auto", marginRight: "auto", width: 110}} > remove </button>
                </div>
            </div>
        </div>
    )
}
