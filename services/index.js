const cartServices = require('./cart.services');
const orderServices = require('./order.services');


module.exports = {
    Cart: cartServices,
    Order: orderServices
}