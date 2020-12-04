var express = require('express');
var router = express.Router();
const passport = require('passport');

var homeControllers = require('../controller/home-controllers');
var productControllers = require('../controller/product-controllers');
const upload = require('../uploadMiddleware');


/* GET home page. */
router.get('/', homeControllers.index);
router.get('/home', homeControllers.index);

// Product
router.get('/product', productControllers.displayProducts);
router.post('/product/add',upload.single('image'), productControllers.addProduct);
router.post('/product/edit',upload.single('image'), productControllers.editProduct);
router.get('/product/delete/:id', productControllers.deleteProduct);

module.exports = router;
