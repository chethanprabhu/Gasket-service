const express = require('express');
const serverless = require('serverless-http');
const getAllProducts = require("../../data/getAllData.json")
const app = express();
const router = express.Router();

app.use('/.netlify/functions/app', router);

router.get("/getAllProducts", (req, res) => {
  res.json(getAllProducts);
})

module.exports.handler = serverless(app);