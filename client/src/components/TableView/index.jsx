import React from 'react';

const TableView = ({ users }) => {
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
      <tr key={user.id} className={className} onClick={() => console.log(user.id + ' clicked')}>
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
    <table>
      <caption>Users statistics</caption>
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {users.map(renderRow)}
      </tbody>
    </table>
  );
};

export default TableView;
