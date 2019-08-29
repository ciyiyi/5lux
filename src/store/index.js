import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import week from "./reducers/storelist"

const reducer=combineReducers({
    week,
  
})

const store=createStore(reducer,applyMiddleware(reduxThunk));
export default store;