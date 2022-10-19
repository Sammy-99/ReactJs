import { combineReducers } from "redux";
import calculateValue from "./firstReducer";

const rootReducer = combineReducers({
    calculateValue
});

export default rootReducer;