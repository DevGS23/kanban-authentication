import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import authRoutes from './auth-routes.js';
const router = express.Router();
// Public route - No authentication required
router.use('/auth', authRoutes);
// Protected routes - Require authentication
router.use('/tasks', authenticateToken, require('./tasks'));
export default router;
