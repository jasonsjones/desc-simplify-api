import express from 'express';
import config from '../config/config';
import * as AuthUtils from './auth-utils';

export default passport => {
    let authRouter = express.Router();

    authRouter.post('/login', passport.authenticate('local'), (req, res) => {
        const user = req.user;
        const token = AuthUtils.generateToken(user);
        res.cookie('access-token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 /* 1hr */
        });
        res.json({
            success: true,
            message: 'user authenticated',
            payload: {
                user,
                token
            }
        });
    });

    authRouter.get('/logout', (req, res) => {
        res.clearCookie('access-token');
        res.json({
            success: true,
            message: 'user logged out',
            payload: null
        });
    });

    return authRouter;
};
