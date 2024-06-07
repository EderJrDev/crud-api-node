const express = require("express")
const router = express();

router.use("/api/products", require("./ProductsRoutes"))

// test route
router.get("/", (req, res) => {
  res.send("API Working!");
})

module.exports = router;