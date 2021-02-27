import React from 'react';

import './button.style.css';

class Button extends React.Component{
    render(){
        const {className, value} = this.props;
        return(
            <button className={`${className}`}>
                {value}
            </button>
        );
    }
}

export default Button;