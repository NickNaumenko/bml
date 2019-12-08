import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [currentPage]);
  
  return isLoading
    ? (
      <div>loading...</div>
    )
    : (
      <>
        <TableView users={users} />
        <Pagination
          pageCount={pagesCount}
          initialPage={currentPage - 1}
        />
      </>      
    );
};

export default Table;
