const express = require('express');

const router = express.Router();

const { getAllProducts, getAllProductsTest } = require("../controllers/products");

router.get('/', getAllProducts);
router.get('/test', getAllProductsTest);

module.exports = router;