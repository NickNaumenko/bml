import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header = props => {
  const { className } = props;

  return (
    <header className={`page-header${className ? ' ' + className : ''}`}>
      <div className="container">
        <div className="page-header__content">
          <Link to='/'>
            <span className="page-header__logo">AppCo</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
