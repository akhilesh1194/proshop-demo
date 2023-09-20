import express from 'express';
const router = express.Router();
import {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUserById,
    updateUserById
  } from '../controllers/userController.js';
import { secure, admin } from '../middleware/authMiddleware.js';


router.route('/')
    .post(registerUser)
    .get(secure, admin, getUsers);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.route('/profile')
    .get(secure, getUserProfile)
    .put(secure, updateUserProfile);

router.route('/:id')
    .get(secure, admin, getUserByID)
    .delete(secure, admin, deleteUserById)
    .put(secure, admin, updateUserById);

export default router;