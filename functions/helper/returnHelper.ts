import express ,{Request, Response} from 'express'
import * as Types from '../type/type'
export function SendUnknownErrorResponse(res: Response, error:any) {
    res.status(400).send({
        error: "099",
        description: "unknown error ,please try again later"
    } as Types.ReturnData);

    console.error(error);

}
 

export function Send400ErrorResponse(res: Response, error:string, description:string) {
    // res.status(400).send({
    //     error: error,
    //     description: description
    // } as Types.ReturnData);

    res.send({
        error: error,
        description: description
    } as Types.ReturnData);
}
 


export function Send400ErrorResponseWithData(res: Response, data:Types.ReturnData) {
    // res.status(400).send({
    //     error: error,
    //     description: description
    // } as Types.ReturnData);

    res.send( data);
}
 

export function Send200ErrorResponse(res: Response, error:string, description:string) {
    res.send({
        error: error,
        description: description
    } as Types.ReturnData);
}
 
export function SendSuccessResponse(res: Response,  data:any,error:string="", description:string="ok" ){
    res.send({
        error: error,
        description: description,
        data:data
    } as Types.ReturnData);
}
 