const express = require('express');
const routes = require('./api/routes');

const app = express();

routes(app);

app.listen(3001, () => {
  console.log('listening on port 3001');
});
