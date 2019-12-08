import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchUsers } from '../../containers/Table/actions';
import TableView from '../../components/TableView';
import Pagination from '../../components/Pagination';

const Table = () => {
  const selectIsLoading = ({ users: { isLoading } }) => isLoading;
  const selectCurrentPage = ({ users: { data: { currentPage } } }) => currentPage;
  const selectUsers = ({ users: { data: { users } } }) => users;
  const selectPagesCount = ({ users: { data: { pagesCount } } }) => pagesCount;

  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const users = useSelector(selectUsers);
  const pagesCount = useSelector(selectPagesCount);

  const { search } = useLocation();
  const page = new URLSearchParams(search).get('page');

  const dispatch = useDispatch();
  const dispatchFetchUsers = page => dispatch(fetchUsers({ page }));

  useEffect(() => {
    dispatchFetchUsers(page);
  }, []);

  const history = useHistory();
  const onPageChange = ({ selected }) => {
    const page = selected + 1;
    history.push(`?page=${page}`);
    dispatchFetchUsers(page);
  };
  
  return isLoading
    ? (
      <div>loading...</div>
    )
    : (
      <>
        <TableView users={users} />
        <Pagination
          pageCount={pagesCount}
          forcePage={currentPage - 1}
          onPageChange={onPageChange}
        />
      </>      
    );
};

export default Table;
