const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const getAllProducts = require("../../mocks/getAllData.json")
const allUsers = require("../../mocks/getAllUsers.json")
const app = express();
app.use(cors());
const router = express.Router();

app.use('/.netlify/functions/app', router);

router.get("/getAllProducts", (req, res) => {
  res.json(getAllProducts);
})

router.get("/allUsers", (req, res) => {
  res.send(allUsers);
})

module.exports.handler = serverless(app);