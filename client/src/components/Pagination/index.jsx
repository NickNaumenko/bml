import React from 'react';
import ReactPaginate from 'react-paginate';
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';

import './styles.scss';

const Pagination = props => (
  <ReactPaginate
    pageRangeDisplayed={3}
    marginPagesDisplayed={1}
    containerClassName="pagination"
    previousLabel={<Arrow />}
    nextLabel={<Arrow />}
    {...props}
  />
);

export default Pagination;
