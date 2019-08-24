const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', {
    pageTitle: 'Shop',
    path: '/'
  });
});

module.exports = router;