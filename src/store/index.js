import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import home from "./reducers/home"
import fashion from "./reducers/fashion"

const reducer = combineReducers({
    home,
    fashion
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;