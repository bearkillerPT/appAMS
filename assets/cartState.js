import { combineReducers } from 'redux';
const INITIAL_CART = {
    cart: []
}

const addPrato = prato => ({
    'type' : 'addPrato',
    'payload' : prato
});

export default function cartReducer(state = INITIAL_CART, action) {
    switch(action.type) {
        case 'addPrato':
            let {cart} = state;
            cart.push(action.payload);
            break;
        default:
            return state;
    }
}