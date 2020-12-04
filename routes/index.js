var express = require('express');
var router = express.Router();
const passport = require('passport');

var homeControllers = require('../controller/home-controllers');

const upload = require('../uploadMiddleware');


/* GET home page. */
router.get('/', homeControllers.index);

router.get('/home', homeControllers.index);


module.exports = router;
