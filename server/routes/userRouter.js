const express = require('express')
const userlist = require('../Controllers/user/userList')
const router = express.Router()


router.get('/',userlist)


module.exports = router