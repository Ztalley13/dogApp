const express = require('express')

const UserCtrl = require('../controllers/usersController')

const userRouter = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/image/:id', UserCtrl.addImage)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

module.exports = userRouter