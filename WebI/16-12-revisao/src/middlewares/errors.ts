//middleware de erro é inserido no final
import { Request, Response, NextFunction } from "express";

export default async function errosMiddleware(
    err: Error, req: Request, res: Response, next: NextFunction)
{
    console.log(err);

    if(isIException(err)){
        return res.status(err.statusCode).json({
            message: err.message
        });
    }

    return res.json({
        message: 'Ops! Ocorreu um erro'
    })
}
