const express = require('express')
const router = express.Router()
const productlist = require('../Controllers/Product/productlist.js');




router.get('/',productlist)




module.exports = router