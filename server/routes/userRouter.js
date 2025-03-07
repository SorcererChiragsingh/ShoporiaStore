const express = require('express')
const userlist = require('../Controllers/user/userList')
const register = require('../Controllers/user/register')
const login = require('../Controllers/user/login')
const usersingle = require('../Controllers/user/usersingle')
const updateuser = require('../Controllers/user/updateuser')
const authenticateToken = require('../middlewares/verifytoken')
const router = express.Router()


router.get('/',userlist)
router.get('/:id',usersingle) // here "id" will be consider as variable.
router.post('/register',register)
router.post('/login',login)
router.patch('/:id',authenticateToken,updateuser)




module.exports = router