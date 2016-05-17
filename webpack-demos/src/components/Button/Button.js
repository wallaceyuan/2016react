import React, { Component } from 'react';

class Button extends Component {
    handleClick(){
        alert('戳我干嘛！');
    }
    render(){
        const style = require('./Button.css');

        return (
            <button className="my-button" onClick={this.handleClick.bind(this)}>
                快戳我 test react-hot-replace 112
            </button>
        );
    }
}

export default Button;