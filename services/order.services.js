const models = require("../models");
const Razorpay = require("razorpay");

const orderServices = {
  async createOrder(req, res) {
    // const { totalAmount } = req.body;
    let curr = "INR";
    var instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.SECRET,
    });

    instance.orders.create(
      {
        amount: 5000,
        currency: curr,
        receipt: "order_rcptid_11",
      },
      (err, order) => {
        if (err) {
          throw "Error in creating order";
        } else {
          models.Order.create(order)
            .then((res) => {
              console.log("Order Created: ", res);
            })
            .catch((err) => {
              console.log("Error in creating order: ", err);
            });
          return order;
        }
      }
    );
  },
};

module.exports = orderServices;
