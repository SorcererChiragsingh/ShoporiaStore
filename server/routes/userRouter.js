const express = require('express')
const userlist = require('../Controllers/user/userList')
const register = require('../Controllers/user/register')
const login = require('../Controllers/user/login')
const router = express.Router()


router.get('/',userlist)
router.post('/register',register)
router.post('/login',login)




module.exports = router