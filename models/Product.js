const mongoose = require("mongoose")
const { Schema } = mongoose

const productSchema = new Schema({
  name: String,
  description: String,
  color: String,
  weight: String,
  type: String,
  price: Number,
  createdAt: {type:Date,default: Date.now}
},
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", productSchema)

module.exports = Product;

