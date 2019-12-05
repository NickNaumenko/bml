const {Router} = require('express');
const usersService = require('../services/usersService');

const router = Router();

router.get('/', (req, res, next) => {
  const {query} = req;
  usersService.getUsers(query)
    .then(data => res.send(data))
    .catch(next);
});

module.exports = router;