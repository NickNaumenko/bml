const usersRoutes = require('./usersRoutes');

module.exports = app => {
  app.use('/api/users', usersRoutes);
};