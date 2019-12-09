const path = require('path');
const BaseRepository = require('./baseRepository');

const pathToStatistic = path.resolve(__dirname, '../users_statistic.json');

class UserStatsRepository extends BaseRepository {
  async getByUserId(userId) {
    const statistic = await this.getAll(this.path);
    return statistic.filter(item => item['user_id'] == userId);
  }
}

module.exports = new UserStatsRepository(pathToStatistic);