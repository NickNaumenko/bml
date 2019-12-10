const fs = require('fs').promises;
const { match } = require('../../helpers');

class BaseRepository {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    const rawData = await fs.readFile(this.path, 'utf-8');
    return JSON.parse(rawData);
  }

  select(attr) {
    const conditions = [[]];
    const self = this;

    return {
      and(cond) {
        conditions.push(cond);
        return this;
      },
      or(cond) {
        conditions[0].push(cond);
        return this;
      },
      async run() {
        const items = await self.getAll();

        const matchItem = (item, { attr, op, value }) => match(item[attr], op, value);
        
        const filterSome = (item, cond) => {
          if (Array.isArray(cond)) {
            return cond.some(cond => matchItem(item, cond)) || true; 
          }
          return matchItem(item, cond);
        };
        const filteredItems = items.filter(item => conditions.every(cond => filterSome(item, cond)));

        const project = (item, attributes) => attributes.reduce((obj, attr) => {
          obj[attr] = item[attr]
          return obj;
        }, {});

        return attr && attr.length ? filteredItems.map(item => project(item, attr)) : filteredItems;
      }
    };
  }

  async count(attr, where) {
    
  }
}

module.exports = BaseRepository;
