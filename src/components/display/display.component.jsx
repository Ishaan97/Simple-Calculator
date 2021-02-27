import React from 'react';

import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectDisplayValue } from '../../redux/calculator/calculator.selector'

import './display.style.css';

class Display extends React.Component{
    render(){
        let {displayValue} = this.props;
        return(
            <>
                <div className="calculator-display">
                    {displayValue}
                </div>
            </>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    displayValue : selectDisplayValue
});

export default connect(mapStateToProps)(Display);