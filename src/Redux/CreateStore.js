import {createStore} from "redux"
import reducer from "./SellingStuffReducer"

const store = createStore(reducer)
export default store;