import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract Bearer token

    if (!token) {
        res.status(401).json({ message: 'Access Denied' });
        return; // Ensure function always exits
    }

    jwt.verify(
        token,
        process.env.JWT_SECRET as string,
        (err: any, user: any) => {
            if (err) {
                res.status(403).json({ message: 'Invalid Token' });
                return; // Ensure function exits on error
            }

            (req as any).user = user; // Attach user info to request object
            next(); // Continue to next middleware
        }
    );
};

export default authenticateToken;
