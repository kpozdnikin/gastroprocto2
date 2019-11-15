import React from 'react';

export default class Button extends React.Component {
    render(){
        return <div className={this.props.style}>
                    <button className='header_button'>{this.props.text}</button>
                    <div className='button_shadow'></div>
                </div>
    }
}