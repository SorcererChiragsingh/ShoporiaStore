const express = require('express')
const userlist = require('../Controllers/user/userList')
const register = require('../Controllers/user/register')
const login = require('../Controllers/user/login')
const usersingle = require('../Controllers/user/usersingle')
const updateuser = require('../Controllers/user/updateuser')
const authenticateToken = require('../middlewares/verifytoken')
const deleteuser = require('../Controllers/user/deleteuser')
const frontenduser = require('../Controllers/user/frontend/frontend_usersingle.js');
const frontendupdateuser = require('../Controllers/user/frontend/frontend_updateuser.js');
const router = express.Router()


router.get('/',userlist)
router.get('/userinfo',authenticateToken,frontenduser)
router.get('/:id',usersingle) // here "id" will be consider as variable.
router.post('/register',register)
router.post('/login',login)
router.patch('/:id',authenticateToken,updateuser)
router.patch('/',authenticateToken,frontendupdateuser)
router.delete('/:id', deleteuser)




module.exports = router