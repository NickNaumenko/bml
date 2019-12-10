const path = require('path');
const BaseRepository = require('./baseRepository');

const pathToStatistic = path.resolve(__dirname, '../users_statistic.json');

class UserStatsRepository extends BaseRepository {
  async getByUserId(userId, query) {
    const { from, to } = query;
    console.log(from, to);
    const stats = await this.select()
      .and({attr: 'user_id', op: '=', value: userId})
      .run();

    return stats;
  }
}

module.exports = new UserStatsRepository(pathToStatistic);