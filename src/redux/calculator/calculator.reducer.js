import { CalculatorActionTypes } from "./calculator.types";
import { numberIsClicked, calculate } from "./calculator.utility"

const INITIAL_STATE = {
    displayValue : 0,
    operator : null,
    storedValue : null,
    previousKeyType : null
}

export const calculatorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case CalculatorActionTypes.CLICKED_NUMBER : 
            return {
                ...state,
                displayValue : numberIsClicked(
                    state.displayValue, 
                    action.payload, 
                    state.previousKeyType),
                previousKeyType : "number"
            }
        case CalculatorActionTypes.CLICKED_OPERATOR :
            return {
                ...state,
                operator : action.payload,
                storedValue : state.displayValue,
                previousKeyType : "operator"
            }
        case CalculatorActionTypes.CLICKED_EQUAL : 
            return {
                ...state,
                displayValue : calculate(state),
                previousKeyType : "equal"
            }
        case CalculatorActionTypes.CLICKED_CLEAR : 
            return INITIAL_STATE;
        default : 
            return state
    };
};