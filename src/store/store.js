import {createStore , combineReducers } from 'redux'

const INITIAL_STATE = [
    {
        name: "ferrari",
        url: "https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

export function reducer (state = INITIAL_STATE, action){
    if(action.type === 'ADD_CAR'){
        return [ ...state, action.car ]
    }
    return state
}

export const addCar = car => {
    return {
        type: 'ADD_CAR',
        car
    }
}

const rootReducer = combineReducers({
    cars: reducer
})

export default createStore( rootReducer)