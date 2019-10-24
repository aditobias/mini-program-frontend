import bookingReducer from "./bookingReducer";
import {combineReducers} from "redux";
import packageReducer from "./packageReducer";

const rootReducer = combineReducers({
    bookingReducer : bookingReducer,
    packageReducer : packageReducer
});

export default rootReducer;