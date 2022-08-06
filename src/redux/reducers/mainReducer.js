import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";
import newsReducer from "./newsReducer";
import treatmentsReducer from "./treatmentsReducer";
import checkoutReducer from "./checkoutReducer";

const mainReducer=combineReducers({
    productsReducer,
     userReducer,
     treatmentsReducer,
     newsReducer,
     checkoutReducer

})

export default mainReducer