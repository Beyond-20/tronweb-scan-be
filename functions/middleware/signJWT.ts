import jwt from 'jsonwebtoken';
import config from '../config/config';
import logging from '../config/logging';
import IUser from '../interfaces/user';

const NAMESPACE = 'SIGN_JWT';

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {            
    logging.info(NAMESPACE, `Attempting to sign token for ${user.username}`);        
    
    try {
        jwt.sign(
            {
                username: user.username
            },
            config.server.token.secret,
            {
                issuer: config.server.token.issuer,
                algorithm: 'HS256',
                expiresIn: "1h"
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    console.log('success')
                    callback(null, token);
                }
            }
        );
        console.log('end sign')
    } catch (error: unknown) {
        // logging.error(NAMESPACE, ${error.message}, error);
        // callback(error, null);
        console.log('Sign JWT Error')
    }
};

export default signJWT;