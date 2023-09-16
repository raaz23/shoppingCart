import { combineReducers, createStore } from 'redux';
import {CN, productReducer,selectedProduct} from './reducer';

const rootReducer = combineReducers({
    allProducts: productReducer, productSelected:selectedProduct, count:CN
});

const myStore = createStore(rootReducer, {});

export default myStore;
