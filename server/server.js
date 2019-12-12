const express = require('express');
const routes = require('./api/routes');
const cors = require('cors');
const errorHandlerMiddleware = require('./api/middlewares/errorHandlerMiddleware');

const app = express();
app.use(cors());

routes(app);

app.use(errorHandlerMiddleware);
app.listen(3001, () => {
  console.log('listening on port 3001');
});
