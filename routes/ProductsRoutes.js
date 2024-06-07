const express = require("express")
const router = express.Router()

// Controller
const { register, update, getProductById, getAllProducts, deleteProduct } = require("../controllers/ProductController");
// Middlewares
const { productCreateValidation, productUpdateValidation } = require("../middlewares/useValidations");

// Routes
router.post("/", productCreateValidation(), register)
router.delete("/:id", deleteProduct)
router.put("/:id", productUpdateValidation(), update)
router.get("/:id", getProductById)
router.get("/", getAllProducts)


module.exports = router;