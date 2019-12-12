const usersRepository = require('../../data/repositories/usersRepository');

const getUsers = async query => {
  const users = await usersRepository.getUsers(query);
  return users;
};

const getUser = async id => {
  const user = await usersRepository.getUser(id);
  return user;
}

module.exports = {
  getUsers,
  getUser,
};