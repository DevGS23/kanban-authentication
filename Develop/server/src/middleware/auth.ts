import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const token = req.header('Authorization')?.split(' ')[1]; // Ext