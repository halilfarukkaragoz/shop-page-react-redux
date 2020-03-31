import React from 'react'
import {useSelector} from "react-redux"

export default function LastItem(props) {
    const basket = useSelector(state => state.basket)
  
    return (
        <div>
            <br/>
            <br></br>
            <br></br>
            <br></br>
            <h3>Last Item You add</h3>
            <br/>
            <div class="card mb-3" style ={{backgroundColor : "yellow"}}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src = {props.temp.photo} class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{props.temp.brand}</h5>
                            <p class="card-text">{props.temp.title}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}
