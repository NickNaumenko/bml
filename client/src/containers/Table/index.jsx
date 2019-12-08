import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../containers/Table/actions';
import TableView from '../../components/TableView';

const Table = () => {
  const selectIsLoading = ({ users: { isLoading } }) => isLoading;
  const selectCurrentPage = ({ users: { data: { currentPage } } }) => currentPage;
  const selectUsers = ({ users: { data: { users } } }) => users;

  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(currentPage))
  }, [currentPage]);
  
  return isLoading
    ? (
      <div>loading...</div>
    )
    : (
      <TableView users={users} />
    );
};

export default Table;
