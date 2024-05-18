const controllers = require('../controllers');

const router = require('express').Router();

router.post('/add-to-cart', controllers.Cart.addToCart)
router.get('/get-cart-items', controllers.Cart.getCartItems)


module.exports = router;