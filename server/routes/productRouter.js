const express = require('express')
const router = express.Router()
const productlist = require('../Controllers/Product/productlist.js');
const createproduct = require('../Controllers/Product/createproduct.js');
const upload = require('../middlewares/image-uploader.js');




router.get('/',productlist)
router.post('/',upload.fields([
    { name: 'product_image1', maxCount: 1 },
    { name: 'product_image2', maxCount: 1 },
    { name: 'product_image3', maxCount: 1 },
    { name: 'product_image4', maxCount: 1 },
  ]),createproduct)




module.exports = router