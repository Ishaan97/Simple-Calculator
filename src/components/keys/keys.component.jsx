import React from 'react';

import Button from "../button/button.component";

import './keys.style.css';

class Keys extends React.Component{
    render(){
        return(
            <div className="calculator-keys">
                <Button className="operator plus" value="+"/>
                <Button className="operator minus" value="-"/> 
                <Button className="operator times" value="&times;" />
                <Button className="operator divide" value="÷" />
                <Button className="number one" value="1" />
                <Button className="number two" value="2" />
                <Button className="number three" value="3" />
                <Button className="number four" value="4" />
                <Button className="number five" value="5" />
                <Button className="number six" value="6" />
                <Button className="number seven" value="7" />
                <Button className="number eight" value="8" />
                <Button className="number nine" value="9" />
                <Button className="number zero" value="0" />
                <Button className="number decimal" value="." />
                <Button className="clear" value="C" />
                <Button className="equal" value="=" />
            </div>
        );
    }
}

export default Keys;