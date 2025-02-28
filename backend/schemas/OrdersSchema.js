const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
   uid: String,
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});
module.exports = { OrdersSchema };