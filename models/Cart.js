const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;