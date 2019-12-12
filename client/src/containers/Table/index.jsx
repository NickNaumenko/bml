import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchUsers } from '../../containers/Table/actions';
import TableView from '../../components/TableView';
import Pagination from '../../components/Pagination';
import routes from '../../routes';
import Breadcrumbs from '../../components/Breadcrumbs';
import Loader from '../../components/Loader';

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

  const onClick = id => {
    const idString = String(id);
    history.push(`${history.location.pathname}/${idString}`);
  }

  const breadcrumbs = [routes.home, routes.users];
  
  return isLoading ?
    (
      <Loader size={150} />
    ) : (
      <>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TableView users={users} onClick={onClick} />
        <Pagination
          pageCount={pagesCount}
          forcePage={currentPage - 1}
          onPageChange={onPageChange}
        />
      </>      
    );
};

export default Table;
