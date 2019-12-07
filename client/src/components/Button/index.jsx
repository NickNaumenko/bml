import React from 'react';

import './styles.scss';

const Button = props => {
  const { onClick, inverted, children, className, ...rest } = props;
  let buttonClassName = `button${className ? ' ' + className : ''}`;
  buttonClassName += inverted ? ' inverted' : '';

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
};

export default Button;
