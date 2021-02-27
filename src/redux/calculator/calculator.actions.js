import { CalculatorActionTypes } from "./calculator.types";

export const clickNumber = (number) => ({
    type : CalculatorActionTypes.CLICKED_NUMBER,
    payload : number
});

export const clickClear = () => ({
    type : CalculatorActionTypes.CLICKED_CLEAR
})

export const clickOperator = (operatorValue) => ({
    type : CalculatorActionTypes.CLICKED_OPERATOR,
    payload : operatorValue
})

export const clickEqual = () => ({
    type : CalculatorActionTypes.CLICKED_EQUAL
})