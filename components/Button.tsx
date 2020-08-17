import React, { useCallback } from 'react';

interface ButtonProps {
  myStyle: any;
  text: string;
  link?: string;
  targetBlank?: boolean;
}

const Button = ({ myStyle, text, link, targetBlank }: ButtonProps) => { // eslint-disable-line

  const buttonClick = useCallback(() => {
    if (link) {
      window.open(link, targetBlank ? '_blank' : '');
    }
  }, [link, targetBlank]);

  return (
      <div>
        <button onClick={buttonClick} className={myStyle}>{text}</button>
        <div className="button_shadow" />
      </div>
  );
};

export default Button;
