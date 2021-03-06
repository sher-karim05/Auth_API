import express from 'express';
import { createUser, loginUser } from '../controllers/AuthControllers.js';
const router = express.Router();

router.post('/user', createUser);
router.post('/login', loginUser);

export default router;