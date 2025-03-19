const express = require('express')
// const addtocartlist = require('../Controllers/cart/addtocartlist')
// const addtocartdelete = require('../Controllers/cart/addtocartdelete')
const authenticateToken = require('../middlewares/verifytoken')
const addtowishlist = require('../Controllers/wishlist/addtowishlist')
const wishlist_list = require('../Controllers/wishlist/wishlist_list')
const removewishlist = require('../Controllers/wishlist/frontend/removewishlist')
const wishlistcount = require('../Controllers/wishlist/frontend/wishlistcount')
const itemwishlist = require('../Controllers/wishlist/frontend/itemwishlist')
const checkuser = require('../middlewares/checkuser')
const router = express.Router()

router.post('/',authenticateToken,addtowishlist)
router.get('/',wishlist_list)
router.get('/wishlistitem',authenticateToken,itemwishlist)
// router.get('/addtocartlist',authenticateToken,addtocartlist)
router.get('/wishlistcount',checkuser,wishlistcount)
router.post('/removewishlist',authenticateToken,removewishlist)
// router.delete('/:cart_id',addtocartdelete)

module.exports = router