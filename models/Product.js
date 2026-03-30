const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  image: {
    type: String,
    required: true   // ✅ comma fixed
  },

  category: {
    type: String,
    required: true
  },

  code: {
    type: String,
    required: true   // ✅ comma fixed
  },

  description: {
    type: String,
    required: true   // ✅ comma fixed
  },

  stock: {
    type: Number,
    default: 0
  }
},
{ timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);