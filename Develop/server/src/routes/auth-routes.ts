import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Dummy user for authentication (Replace this with a database later)
const USERS = [{ username: 'admin', password: 'password123' }];

// Login Route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = USERS.find(
   