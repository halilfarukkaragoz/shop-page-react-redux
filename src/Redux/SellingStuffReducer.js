  const initialstate = {
    products :[
        {index : 0,
        brand : "Adidas",
        price : 100, // as a dolar,
        title : "Adidas VS PACE AYAKKABI",
        photo :"https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/dd9a709ceafa4b69b309a8d400df4d23_9366/VS_Pace_Ayakkabi_Gri_B74318_01_standard.jpg"
        }
        ,
       {
        index : 1,
        brand : "Hekimo",
        price : 42.46, // as a dolar 
        title :"C-Crown Crushable Wool Felt Fedora Hat",
        photo :"https://www.villagehatshop.com/photos/product/giant/4511390S60100/alt/60100.jpg" 
    }
]
    ,
    basket : []
}



const reducer = (state = initialstate ,action) => {
    switch(action.type){
        case "ADD_STUFF":
            return{
                ...state,
                basket : [...state.basket,state.products[action.index]]
            }
            case "REMOVE_STUFF" : 
            let a =state.basket.indexOf(state.products[action.index])
            let b = [...state.basket] 
            b.splice(a,1)
            return {
                ...state,
                basket : [...b]
            }
   default :return state
}

}
export default reducer;
