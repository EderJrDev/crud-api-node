const Product = require("../models/Product")

const mongoose = require("mongoose");

//Register product and sign in
const register = async (req, res) => {
  const { name,
    description,
    color,
    weight,
    type,
    price
  } = req.body

  // Create product
  const newProduct = await Product.create({
    name,
    description,
    color,
    weight,
    type,
    price
  })

  res.status(201).json({
    newProduct
  })
}

const getAllProducts = async (req, res) => {
  const products = await Product.find()

  res.status(200).json(products)
}

// Update an product 
const update = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id)
  const updatedProduct = await Product.updateOne({ _id: id }, req.body)

  res.status(200).json({ message: 'Produto atualizado com sucesso' })
}

// Get product by id
const getProductById = async (req, res) => {

  try {
    const product = await Product.findById(new mongoose.Types.ObjectId(req.params.id))
    // check if product existis
    if (!product) {
      res.status(404).json({ errors: ["Produto não encontrado"] });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ errors: ["Produto não encontrado"] });
  }

}

const deleteProduct = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id)
  const deletingProduct = await Product.deleteOne({ _id: id })
  res.status(200).json({ message: 'Produto deletado com sucesso' })
}

module.exports = {
  register,
  getAllProducts,
  update,
  getProductById,
  deleteProduct
}