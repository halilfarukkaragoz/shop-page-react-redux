  const initialstate = {
    products :[
        //you can add more product in here
        {index : 0,
        brand : "Adidas",
        price : 100, // as a dolar,
        title : "Adidas VS PACE AYAKKABI",
        addStatus : false,
        photo :"https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/dd9a709ceafa4b69b309a8d400df4d23_9366/VS_Pace_Ayakkabi_Gri_B74318_01_standard.jpg"
        }
        ,
       {
        index : 1,
        brand : "Hekimo",
        price : 42.46, // as a dolar 
        title :"C-Crown Crushable Wool Felt Fedora Hat",
        addStatus : false,
        photo :"https://www.villagehatshop.com/photos/product/giant/4511390S60100/alt/60100.jpg" 
    }
    ,
    {
        index : 2,
        brand : "Adidas",
        price : 100, // as a dolar,
        title : "Adidas VS PACE AYAKKABI",
        addStatus : false,
        photo :"https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/dd9a709ceafa4b69b309a8d400df4d23_9366/VS_Pace_Ayakkabi_Gri_B74318_01_standard.jpg"
    }
    ,
    {
        index : 3,
        brand : "Hekimo",
        price : 42.46, // as a dolar 
        title :"C-Crown Crushable Wool Felt Fedora Hat",
        addStatus : false,
        photo :"https://www.villagehatshop.com/photos/product/giant/4511390S60100/alt/60100.jpg" 
    }
    ,
    {
        index : 4,
        brand : "Adidas",
        price : 100, // as a dolar,
        title : "Adidas VS PACE AYAKKABI",
        addStatus : false,
        photo :"https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/dd9a709ceafa4b69b309a8d400df4d23_9366/VS_Pace_Ayakkabi_Gri_B74318_01_standard.jpg"

    }
    ,
    {
        index : 5,
        brand : "Hekimo",
        price : 42.46, // as a dolar 
        title :"C-Crown Crushable Wool Felt Fedora Hat",
        addStatus : false,
        photo :"https://www.villagehatshop.com/photos/product/giant/4511390S60100/alt/60100.jpg" 
    }
    
]
    ,
    basket : []
}



const reducer = (state = initialstate ,action) => {
    switch(action.type){
        case "ADD_STUFF":
            let temp = state.products
            temp[action.index].addStatus = true
            return{
                ...state,
                basket : [...state.basket,state.products[action.index]],
                products : temp
            }
            case "REMOVE_STUFF" : 
            let a =state.basket.indexOf(state.products[action.index])
            let b = [...state.basket]
            b.splice(a,1)
            let temp1 = state.products
            temp1[action.index].addStatus = false
            return {
                ...state,
                basket : [...b],
                product : temp1
            }
   default :return state
}

}
export default reducer;
