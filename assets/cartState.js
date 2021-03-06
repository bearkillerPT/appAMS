import { combineReducers } from 'redux';
import { restaurants } from '../screens/AppCliente/AppClientes';
const INITIAL_CART = {
    cart: [],
    restaurant: '',
    isLogged: false,
    user: ''
}

export const setLogged = val => ({
    'type': 'setLogged',
    'payload': val
});

export const setUser = val => ({
    'type': 'setUser',
    'payload': val
});

export const addPrato = prato => ({
    'type': 'addPrato',
    'payload': prato
});

export const delPrato = prato => ({
    'type': 'delPrato',
    'payload': prato
});

function cartReducer(state = INITIAL_CART, action) {
    switch (action.type) {
        case 'addPrato':
            let restauranteIn = '';
            for (let restaurant in restaurants) for (let prato in restaurant.Pratos) if (prato === action.payload) restauranteIn = restaurant.name;
            if (state.restaurant != '') {
                if (state.restaurant != restauranteIn) return;
            }
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case 'delPrato':
            return {
                ...state,
                cart: state.cart.filter(prato => prato !== action.payload)
            }
        case 'setLogged':
            return {
                ...state,
                isLogged: action.payload
            }
        case 'setUser':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default combineReducers({
    cartReducer: cartReducer
});
