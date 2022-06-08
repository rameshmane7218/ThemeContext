import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./action.types";

export const Add = (value) => ({ type: COUNTER_INCREMENT, payload: value });
export const Substact = (value) => ({ type: COUNTER_DECREMENT, payload: value });
