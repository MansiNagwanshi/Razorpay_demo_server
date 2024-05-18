const models = require("../models");

const cartServices = {
    async addToCart(req, res) {
        const { title, description, price, image } = req.body;
    
        if (!title) {
          throw "Title is Required"
        }
        if (!description) {
            throw "Description is required" 
        }
        if (!price) {
            throw "Price is required"
        }
        if (!image) {
            throw  "Image is required"
        }
        const productInCart = await models.Cart.findOne({ title, description, price, image });
        if (productInCart) {
            throw "Product is already in the cart"
        }
    
        await models.Cart.create({ title, description, price, image });
    
        return;
      },

      async getCartItems(req, res) {
        const cartItems = await models.Cart.find({});
        return cartItems;
      }
};

module.exports = cartServices;
