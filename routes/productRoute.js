const express = require("express");

const {
  getAllProducts,
  getPorduct,
  createProduct,
} = require("../controllers/productController.js");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getPorduct);
router.post("/", createProduct);

module.exports = router;
