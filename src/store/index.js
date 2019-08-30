import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import hypermarket from './reducer/hyperMarket';
import classify from './reducer/classify';
import brands from './reducer/brands';
import fashion from "./reducer/fashion";


const reducer=combineReducers({
    hypermarket,
    classify,
    brands,
    fashion


})
const store=createStore(reducer,applyMiddleware(reduxThunk));
export default store;