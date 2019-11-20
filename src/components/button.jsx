import React from 'react';

export default class Button extends React.Component {
    render(){
        return <div>
                    <button className={this.props.style}>{this.props.text}</button>
                    <div className='button_shadow'></div>
                </div>
    }
}