const express = require('express');
let config = require('./config/env');
const cors = require('cors');
const bodyparser = require('body-parser')
require('dotenv').config();
const app = express();
app.use(bodyparser.json())
app.use(cors());
require('./modules/user/init').init(app);

app.listen(config.PORT, () => {
  console.log(`server is running on ${config.PORT}`);
});
