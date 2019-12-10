const usersStatsRepository = require('../../data/repositories/usersStatsRepository');
const usersService = require('../../data/repositories/usersRepository');

const getByUserId = async (userId, query) => {
  const user = usersService.getUser(userId);
  if (!user) {
    return;
  }

  return usersStatsRepository.getByUserId(userId, query);
};

module.exports = {
  getByUserId,
};