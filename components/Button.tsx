import React from 'react';

const Button = (props: any) => { // eslint-disable-line
  return <div>
    <button className={props.myStyle}>{props.text}</button>
    <div className='button_shadow' />
  </div>
};

export default Button;
