const fs = require('fs').promises;

class BaseRepository {
  constructor(path) {
    this.path = path;
  }

  async getAll(path) {
    const rawData = await fs.readFile(path, 'utf-8');
    return JSON.parse(rawData);
  }
}

module.exports = BaseRepository;
