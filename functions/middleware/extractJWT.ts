import { hash } from 'bcryptjs';
import { Request, Response, NextFunction } from 'express'
import jwt, { decode } from 'jsonwebtoken'
import config from '../config/config';
import logging from '../config/logging';
import { generatemd5Hash } from '../controller/hashController';
import { MongoDatabase } from '../database/MongoDatabase';
import { Send400ErrorResponse } from '../helper/returnHelper';

const NAMESPACE = 'EXTRACT_JWT';

const extractJWT = (req: Request, res: Response, next: NextFunction) => {

    logging.info(NAMESPACE, `Validating Token - ${req.headers.authorization}`)

    let token = req.headers.authorization;
    if (token)
    {
        
        // ATTEMPT DECODE JWT
        jwt.verify(token, config.server.token.secret, async (error, decoded: any) => {
            if (error)
            {
                Send400ErrorResponse(res,"101", "Invalid Token"); 
                return;              
            }
            else {
                logging.info(NAMESPACE, `Decoded Token - ${JSON.stringify(decoded,null,4)}`)

                // CHECK ISSUER    
                if (decoded?.iss != config.server.token.issuer)
                {
                    Send400ErrorResponse(res,"102", "Invalid Token"); 
                    return;              
                }

                res.locals.JWTToken =  decoded;   
                var merchant = await MongoDatabase.Merchant.getMerchantByPlayerId(decoded.username);

                req.body.secureToken=merchant?.merchant_id.toString();

                req.body.hash=await generatemd5Hash(req.body, merchant?.secret_key);
                next();               
            }
        })
    }
    else{
        Send400ErrorResponse(res,"100", "Invalid Token"); 
        return;
    }
}
export default extractJWT;