const controllers = require('../controllers');

const router = require('express').Router();

router.post('/create-order', controllers.Order.createOrder)


module.exports = router;