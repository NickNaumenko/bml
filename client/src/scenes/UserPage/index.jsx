import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import UserStats from '../../containers/UserStats';
import routes from '../../routes';
import { useParams } from 'react-router-dom';
import * as usersService from '../../services/usersService';

import './styles.scss';

const UserPage = () => {
  const { id } = useParams(routes.userPage);

  const [user, setUser] = useState();
  useEffect(() => {
    usersService.getUser(id)
      .then(user => setUser(user));
  }, [id]);
  
  if (!user) {
    return <div>Loading</div>
  }

  const fullname = `${user['first_name']} ${user['last_name']}`;
  
  const breadcrumbs = [routes.home, routes.users, {name: fullname}];
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="user-page__title">{fullname}</h1>
      <UserStats userId={id} />
    </>
  )
};

export default UserPage;
