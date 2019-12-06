const {Router} = require('express');
const usersService = require('../services/usersService');
const usersStatsService = require('../services/usersStatsService');

const router = Router();

router
  .get('/', (req, res, next) => {
    const {query} = req;
    usersService.getUsers(query)
      .then(data => res.send(data))
      .catch(next);
  })
  .get('/:id/stats', (req, res, next) => {
    const { query, params: { id } } = req;
    usersStatsService.getByUserId(id, query)
      .then(data => res.send(data))
      .catch(next);
  });

module.exports = router;