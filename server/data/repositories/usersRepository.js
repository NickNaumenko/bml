const fs = require('fs').promises;
const path = require('path');
const paginate = require('../../helpers/paginate');

const pathToUsers = path.resolve(__dirname, '../users.json');

const getUsers = async query => {
  const {page = 1} = query;
  const ITEMS_PER_PAGE = 50;

  const rawData = await fs.readFile(pathToUsers, 'utf-8');
  const users = JSON.parse(rawData);

  const {offset, limit, pagesCount, currentPage} = paginate(users.length, page, ITEMS_PER_PAGE);
  return {
    pagesCount,
    currentPage,
    users: users.slice(offset, offset + limit),
  }
};

module.exports = {
  getUsers,
};