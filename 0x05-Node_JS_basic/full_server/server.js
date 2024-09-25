const express = require('express');

const app = express();

const router = require('./routes/index');

const port = 1245;
app.use('/', router);

app.listen(port, () => {
  console.log('Server running on port 1245');
});
