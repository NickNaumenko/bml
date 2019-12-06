const fs = require('fs').promises;
const path = require('path');

const pathToStatistic = path.resolve(__dirname, '../users_statistic.json');

const getByUserId = async userId => {
  const rawData = await fs.readFile(pathToStatistic, 'utf-8');
  const statistic = JSON.parse(rawData);

  const result = statistic.filter(item => item['user_id'] == userId);
  return result;
};

module.exports = {
  getByUserId,
};