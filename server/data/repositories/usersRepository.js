const paginate = require('../../helpers/paginate');
const BaseRepository = require('./baseRepository');
const path = require('path');

pathToUsers = path.resolve(__dirname, '../users.json');

class UsersRepository extends BaseRepository {
  async getUsers(query) {
    const {page = 1} = query;
    const ITEMS_PER_PAGE = 50;
  
    const users = await this.getAll(this.path);
  
    const {offset, limit, pagesCount, currentPage} = paginate(users.length, page, ITEMS_PER_PAGE);
    return {
      pagesCount,
      currentPage,
      users: users.slice(offset, offset + limit),
    }    
  }

  async getUser(userId) {
    const users = await this.getAll(this.path);

    return users.find(({id}) => userId === id);    
  }
}

module.exports = new UsersRepository(pathToUsers);