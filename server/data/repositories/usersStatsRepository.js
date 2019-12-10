const path = require('path');
const BaseRepository = require('./baseRepository');

const pathToStatistic = path.resolve(__dirname, '../users_statistic.json');

class UserStatsRepository extends BaseRepository {
  async getByUserId(userId, query) {
    const { from, to } = query;
    const select = await this.select()
      .and({attr: 'user_id', op: '=', value: userId});
    if (from) {
      select.and({attr: 'date', op: '>=', value: from});
    }
    if (to) {
      select.and({attr: 'date', op: '<=', value: to});
    }
    const stats = select.run();

    return stats;
  }
}

module.exports = new UserStatsRepository(pathToStatistic);