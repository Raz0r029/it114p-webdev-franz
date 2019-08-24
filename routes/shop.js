const express = require('express');
const router = express.Router();

const shopController = require('../controller/shop');

router.get('/', shopController.getProducts);

module.exports = router;