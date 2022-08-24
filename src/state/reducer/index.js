import { combineReducers } from "redux";
import delOrder from "./delOrder";
import addOrder  from "./addOrder";
import calc from "./calc"
//import reducer from "./addOrder";
const reducer = combineReducers({
    addOrd: addOrder,
    calc:calc,
    delOrd:delOrder
})

export default reducer