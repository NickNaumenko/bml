import React from 'react';

import './styles.scss';

const Header = props => {
  const { className } = props;

  return (
    <header className={`page-header${className ? ' ' + className : ''}`}>
      <div className="container">
        <div className="page-header__content">
          <a className="page-header__logo">
            AppCo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
