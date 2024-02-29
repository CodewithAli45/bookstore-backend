const { getAllUsers, getUserById, updateUser } = require('../controllers/userController');
const isLoggedIn = require('../middleware/isLoggedIn');


const userRouter = require('express').Router();

userRouter.get('/allusers', isLoggedIn, getAllUsers);
userRouter.get('/getuserbyid/:id', isLoggedIn, getUserById);
userRouter.put('/updateuser/:id', isLoggedIn, updateUser)

module.exports = userRouter;