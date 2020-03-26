import React from 'react'
import {useDispatch} from "react-redux"
import {removeStuff} from "../Redux/Action"

export default function DisplayBasketProducts(props) {
    const dispatch = useDispatch()
    console.log(props)
    return (
        <div >
            <div class="card" style={{width: "60rem",backgroundColor :"lightgray", margin : "auto"}}>
            <img style = {{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}} src= {props.photo} alt="Smiley face" height="333" width="333"/>
                <div class="card-body">
                    <h5 class="card-title"><p style = {{fontSize : 30,textAlign : "center"}} >{props.title} </p></h5>
                    {props.numberArray[props.index]}
                    <button onClick = {()=> dispatch(removeStuff(props.index))} > remove </button>
                </div>
            </div>
        </div>
    )
}
