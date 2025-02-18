const express = require('express');
const { createAOrder } = require('./order.controller');

const router = express.Router();

 router.post("/", createAOrder)

module.exports = router;
