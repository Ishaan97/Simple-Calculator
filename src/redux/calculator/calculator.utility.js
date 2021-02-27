export const numberIsClicked = (displayValue, numberClicked, previousKeyType) => {
    if(displayValue === 0 || previousKeyType === "operator"){
        return numberClicked;
    }
    else{
        return displayValue+numberClicked;
    }
}


export const calculate = (state) => {
    let firstNumber = parseFloat(state.storedValue);
    let secondNumber = parseFloat(state.displayValue);

    let displayText = '';

    if(state.operator === "plus") {
        displayText = firstNumber + secondNumber;
    }
    if(state.operator === "minus") {
        displayText = firstNumber - secondNumber;
        
    }
    if(state.operator === "times") {
        displayText = firstNumber * secondNumber;
    }
    if(state.operator === "divide") {
        if(secondNumber === 0){
            displayText = "To Infinity and Beyond";
        }
        else{
            displayText = firstNumber / secondNumber;
        }   
    }
    return displayText.length === 0 ? "Error" : displayText;
}