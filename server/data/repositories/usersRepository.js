const path = require('path');
const BaseRepository = require('./baseRepository');
const paginate = require('../../helpers/paginate');
const usersStatsRepository = require('./usersStatsRepository');

pathToUsers = path.resolve(__dirname, '../users.json');

const MAX_COUNT = 50;

class UsersRepository extends BaseRepository {
  async getUsers(params) {
    const { page = 1, count = MAX_COUNT } = params;
    if (count > MAX_COUNT) {
      count = MAX_COUNT;
    }

    const allUsers = await this.select().run();
    const {offset, limit, pagesCount, currentPage} = paginate(allUsers.length, page, count);
  
    const users = await Promise.all(allUsers.slice(offset, offset + limit)
      .map(async user => {
        const stats = await usersStatsRepository
          .select(['total_clicks', 'total_page_views'])
          .and({attr: 'user_id', op: '=', value: user.id})
          .groupBy('id')
          .sum('clicks', 'total_clicks')
          .sum('page_views', 'total_page_views')
          .run();
        return {...user, ...stats[0]};
      }));

    return {
      pagesCount,
      currentPage,
      users,
    };
  }

  async getUser(userId) {
    const users = await this.getAll(this.path);

    return users.find(({id}) => userId === id);    
  }
}

module.exports = new UsersRepository(pathToUsers);