import React from 'react';

import './styles.scss';

const TableView = ({ users, onClick }) => {
  const headers = [
    'id',
    'First name',
    'Last name',
    'Email',
    'Gender',
    'IP address',
    'Total clicks',
    'Total page views',
  ];

  const renderRow = (user, i) => {
    const className = i % 2 !== 0 ? 'even' : '';
  
    return (
      <tr key={user.id} className={className} onClick={() => onClick(user.id)}>
        <td>{user.id}</td>
        <td>{user['first_name']}</td>
        <td>{user['last_name']}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user['ip_address']}</td>
      </tr>
    );
  };

  return (
    <>
      <h1 className="statistic-title">Users statistics</h1>
      <table className="statistic-table">
        <thead>
          <tr>
            {headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {users.map(renderRow)}
        </tbody>
      </table>
    </>
  );
};

export default TableView;
