const router = require('express').Router();
const { fetchProduct } = require('../controllers/productController');

router.get('/', fetchProduct);

module.exports = router;
