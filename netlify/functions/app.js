const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const getAllProducts = require("../../data/getAllData.json")
const app = express();
app.use(cors());
const router = express.Router();

app.use('/.netlify/functions/app', router);

router.get("/getAllProducts", (req, res) => {
  res.json(getAllProducts);
})

module.exports.handler = serverless(app);