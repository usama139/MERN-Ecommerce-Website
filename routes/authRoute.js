import express from 'express';
import { registerController, loginController, testController, forgotPasswordController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';


const router = express.Router();

// Register route
router.post('/register', registerController);

// Login route
router.post('/login', loginController);

//Forgot passowrd
router.post('/forgot-password', forgotPasswordController);

// Test route
router.get('/test', requireSignIn, isAdmin, testController);

//protected routes
router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ok: true});
})

export default router;
