import React from 'react';

import './styles.scss';

const Footer = props => {
  const { className } = props;

  return (
    <footer className={`page-footer${className ? ' ' + className : ''}` }>
      <div className="container">
        <div className="page-footer__content">
          <p className="page-footer__column">
            <a className="page-footer__logo">AppCo</a>
          </p>
          <p className="page-footer__column">All rights reserved by ThemeTags</p>
          <p className="page-footer__column">Copyrights © 2019.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
