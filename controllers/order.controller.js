const services = require('../services');

const orderController = {
    async createOrder(req,res){
        try {
            await services.Order.createOrder(req,res);
            return res.status(201).json({message: "Order created"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal server error",error});
        }
    },
}

module.exports = orderController;