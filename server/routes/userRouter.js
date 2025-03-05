const express = require('express')
const userlist = require('../Controllers/user/userList')
const register = require('../Controllers/user/register')
const router = express.Router()


router.get('/',userlist)
router.post('/register',register)

module.exports = router