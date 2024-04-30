const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require("dotenv").config();

const database = require("./config/database");

// Routes version 1
const routesVer1 = require("./api/v1/routes/index.route");

database.connect();

const app = express();
const port = process.env.PORT;

app.use(cors());

// parse application/json
app.use(bodyParser.json());

// Routes version 1
routesVer1(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})