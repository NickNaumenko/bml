const usersRepository = require('../../data/repositories/usersRepository');

const getUsers = async query => {
  const users = await usersRepository.getUsers(query);
  return users;
};

module.exports = {
  getUsers,
};