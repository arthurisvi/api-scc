import { Request, Response, NextFunction } from "express" 
import { verify } from "jsonwebtoken"

interface IPayload{
    sub: string
}

export function verificaAutenticacao(req: Request, res: Response, next: NextFunction){

    const bearerToken = req.headers.authorization

    if(!bearerToken){
        return res.status(401).end()
    }

    const token = bearerToken.split(" ")
    try{
        const { sub } = verify(token[1], "96e4b97592de348e50f3745d2dfb6548") as IPayload

        req.usuario_id = sub

        return next()
    }catch(err){
        return res.status(401).end()
    }
}