import React from 'react';

import { connect } from "react-redux";

import { clickNumber, clickClear, clickOperator, clickEqual } from "../../redux/calculator/calculator.actions"

import './button.style.css';

class Button extends React.Component{

    whatIsClicked(type, value, operatorType){
        let {clickNumber, clickClear, clickOperator, clickEqual} = this.props;
        if(type === "number") clickNumber(value);
        else if(type === "clear") clickClear();
        else if(type === "operator") clickOperator(operatorType);
        else if(type === "equal") clickEqual()
    }

    render(){

        const {className, value} = this.props;
        const key = className.split(" ")[0];
        const operatorType = className.split(" ")[1];
        return(
            <button 
                className={`${className}`} 
                onClick={()=> this.whatIsClicked(key, value, operatorType)}
            >
                {value}
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    clickNumber : number => dispatch(clickNumber(number)),
    clickClear : () => dispatch(clickClear()),
    clickOperator : (operatorValue)=> dispatch(clickOperator(operatorValue)),
    clickEqual : () => dispatch(clickEqual())
})

export default connect(null, mapDispatchToProps)(Button);