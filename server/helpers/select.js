const { match } = require('../helpers');

class Select {
  #conditions = {
    some: [],
    every: []
  };
  #aggregateFunctions = new Map();
  #groupAttr = null;

  constructor(getRelation, attributes = []) {
    this._getRelation = getRelation;
    this._attributes = attributes;
  }

  and(cond) {
    this.#conditions.every.push(cond);
    return this;
  }

  or(cond) {
    this.#conditions.some.push(cond);
    return this;
  }

  async run() {
    const items = await this._getRelation();

    const selected = this._select(items, this.#conditions);
    const grouped = this._group(selected);

    return this._project(grouped, this._attributes);
  }

  groupBy(attr) {
    this.#groupAttr = attr;
    return this;
  }

  sum(attr, as = `sum_${attr}`) {
    const sum = (acc, cur) => acc + cur;
    this.#aggregateFunctions.set(as, {
      attr,
      action: sum,
      as,
      value: 0
    });
    return this;
  }

  count(attr = '', as = `count_${attr}`) {
    const count = value => value + 1;
    this.#aggregateFunctions.set(as, {
      attr,
      action: count,
      as,
      value: 0,
    });
    return this;
  }

  _select(items, { some, every }) {
    if (!some.length && !every.length) {
      return items;
    }
    const matchItem = (item, { attr, op, value }) => match(item[attr], op, value);

    const filterSome = (item, cond) => cond.some(cond => matchItem(item, cond));
    const filterEvery = (item, cond) => cond.every(cond => matchItem(item, cond));

    return items.filter(item => filterEvery(item, every) || filterSome(item, some));
  }

  _project(items, attributes) {    
    const mapCb = item => {
      return attributes.reduce((obj, attr) => {
        obj[attr] = item[attr];
        return obj;
      }, {});
    }

    return attributes && attributes.length ? items.map(mapCb) : items;
  }

  _group(items) {
    const groupAttr = this.#groupAttr;
    const aggregateFunctions = this.#aggregateFunctions;

    const groups = new Map();
    const aggregations = [...aggregateFunctions.values()].map(({ as, value }) => ([as, value]));

    items.forEach(item => {
      if (!groups.has(item[groupAttr])) {
        groups.set(item[groupAttr], Object.fromEntries(aggregations));
      }
      const group = groups.get(item[groupAttr]);

      this._aggregate(group, item);
    });

    const grouped = new Map();
    items.forEach(item => {
      const group = groups.get(item[groupAttr]);

      if (!grouped.has(item[groupAttr])) {
        grouped.set(item[groupAttr], {...item, ...group});
      } 
    });

    return [...grouped.values()];
  }

  _aggregate(group, item) {
    for (let key in group) {
      const { action, attr } = this.#aggregateFunctions.get(key);
      const newValue = action(group[key], item[attr]);
      group[key] = newValue;
    }
  }
}

module.exports = Select;
