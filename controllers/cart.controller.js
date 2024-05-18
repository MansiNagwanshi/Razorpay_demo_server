const services = require('../services');
const cartController = {
    async addToCart(req,res){
        try {
            await services.Cart.addToCart(req,res);
            return res.status(201).json({message: "Item added to cart"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal server error",error});
        }
    },

    async getCartItems(req,res){
        try {
            const cartItems = await services.Cart.getCartItems(req,res);
            return res.status(200).json({cartItems});
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal server error",error});
        }
    }
}

module.exports = cartController;