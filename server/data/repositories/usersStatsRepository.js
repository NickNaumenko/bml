const path = require('path');
const BaseRepository = require('./baseRepository');
const formatDate = require('../../helpers/formatDate');

const pathToStatistic = path.resolve(__dirname, '../users_statistic.json');

class UserStatsRepository extends BaseRepository {
  async getByUserId(userId, query) {
    const { from, to } = query;
    const startDate = formatDate(from);
    const endDate = formatDate(to);

    const select = await this.select()
      .and({attr: 'user_id', op: '=', value: userId});
    if (from) {
      select.and({attr: 'date', op: '>=', value: startDate});
    }
    if (to) {
      select.and({attr: 'date', op: '<=', value: endDate});
    }
    const stats = select.run();

    return stats;
  }
}

module.exports = new UserStatsRepository(pathToStatistic);