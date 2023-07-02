const express = require('express')
const userController = require('./../controllers/userController')
const router =express.Router();

userRouter
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.create);

userRouter
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

    module.exports = router;