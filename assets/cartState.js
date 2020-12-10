import { combineReducers } from 'redux';
const INITIAL_CART = {
    cart: []
}

export const addPrato = prato => ({
    'type' : 'addPrato',
    'payload' : prato
});

function cartReducer(state = INITIAL_CART, action)   {
    switch(action.type) {
        case 'addPrato':
            let {cart} = state;
            cart.push(action.payload);
            break;
        default:
            return state;
    }
}

export default combineReducers({
    cart: cartReducer
  });
  