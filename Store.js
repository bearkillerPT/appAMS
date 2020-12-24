import {createStore} from 'redux';
import cartReducer from './assets/cartState';

const configStore = () => {return createStore(cartReducer);}
export default configStore;