const express = require('express');
const router = express.Router();
const cartRoutes = require('./cart');
const orderRoutes = require('./order');

router.use('/cart', cartRoutes)
router.use('/order', orderRoutes)

module.exports =  router;