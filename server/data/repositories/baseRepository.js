const fs = require('fs').promises;
const { match } = require('../../helpers');
const Select = require('../../helpers/select');

class BaseRepository {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    const rawData = await fs.readFile(this.path, 'utf-8');
    return JSON.parse(rawData);
  }

  select(attributes) {
    return new Select(this.getAll.bind(this), attributes);
  }
}

module.exports = BaseRepository;
