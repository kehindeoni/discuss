var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/users');

/* GET users listing. */
router.get('/', ctrl.get);

module.exports = router;
