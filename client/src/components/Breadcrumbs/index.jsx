import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Separator } from '../../assets/img/separator.svg';
import './styles.scss';

const Breadcrumbs = ({ breadcrumbs }) => (
  <ul className="breadcrumbs">
    {breadcrumbs.map(({ name, path }, key) => {
      return key === breadcrumbs.length - 1 ? (
        <li key={key} className="breadcrumbs__current">
          {name}
        </li>
      ) : (
        <li key={key}>
          <Link to={path}>
            {name}
          </Link>
          <Separator className="breadcrumbs__separator" />
        </li>
      );
    })}
  </ul>
);

export default Breadcrumbs;
