import { createSelector } from "reselect";

const selectCalculator = state => {
    return state.calculator
}

export const selectDisplayValue = createSelector(
    [selectCalculator],
    (calculator) => calculator.displayValue
);