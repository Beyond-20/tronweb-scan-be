import { Request, Response } from 'express';
// import { checkHash } from '../controller/hashController';
import { Send400ErrorResponse } from './returnHelper';


export function isEmpty(obj: any) {
    if (obj === null || obj === undefined || obj === "")
        return true;
    else
        return false;

}

export async function validateReqParams(req: Request, res: Response, schema: any) {
    const result = schema.validate(req.body);
    
    if (result.error) {
        console.log('test');
        Send400ErrorResponse(res, "010", "One or several parameters is not set correctly : " + result.error.details[0].message);
        return false;
    }
    else
        return true;
}

// export async function  validateHash  ( object:any,res:Response)  {
//     console.log('checking hash')

//     var secret_key:string = process.env.SECRET_KEY??"f397ded6280448869d76d9dfc88c48df";
//     var validHash = await checkHash(object, secret_key);
//     console.log(`valid hash ${validHash}`)
//     return validHash;
// }

 

 