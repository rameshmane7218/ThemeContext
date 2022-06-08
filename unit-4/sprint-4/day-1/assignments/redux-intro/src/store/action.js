import { ADD, DECREMENT_COUNTER, DIVIDE, INCREMENT_COUNTER, MULTIPLY, SUBTRACT } from "./action.type"

export const increment = (value)=>{
    return {
        type:INCREMENT_COUNTER,
        payload: value,
    }
}
export const decrement = (value)=>{
    return {
        type:DECREMENT_COUNTER,
        payload: value,
    }
}
export const add = (value)=>{
    return {
        type:ADD,
        payload: value,
    }
}
export const subtact = (value)=>{
    return {
        type:SUBTRACT,
        payload: value,
    }
}
export const multiply = (value)=>{
    return {
        type:MULTIPLY,
        payload: value,
    }
}
export const divide = (value)=>{
    return {
        type:DIVIDE,
        payload: value,
    }
}