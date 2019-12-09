import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import routes from '../../routes';

const UserPage = () => {
  const breadcrumbs = [routes.home, routes.users, {name: 'user name'}];
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  )
};

export default UserPage;
