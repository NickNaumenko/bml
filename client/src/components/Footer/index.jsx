import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Footer = props => {
  const { className } = props;

  return (
    <footer className={`page-footer${className ? ' ' + className : ''}` }>
      <div className="container">
        <ul className="page-footer__content"> 
          <li className="page-footer__column">
            <Link className="page-footer__logo" to="/">AppCo</Link>
          </li>
          <li className="page-footer__column">All rights reserved by ThemeTags</li>
          <li className="page-footer__column">Copyrights © 2019</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
