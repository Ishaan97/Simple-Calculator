import React from 'react';

import Display from '../../components/display/display.component'
import Keys from '../../components/keys/keys.component';

import './calculator.style.css';

class Calculator extends React.Component { 
    render(){
        return(
            <div className="calculator">
                <Display />
                <Keys />
            </div>
        );
    }
}

export default Calculator;