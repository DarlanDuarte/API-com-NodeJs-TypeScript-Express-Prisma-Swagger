import {Request, Response, NextFunction} from 'express'
import { IPayload } from '../models/interfaces/user/auth/Payload'
import { verify } from 'jsonwebtoken'


export default function isAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).json({message: "Token não foi passado!"})
    }

    const [, token] = authToken.split(" ")

    try{
        const {sub} = verify(token, process.env.JWT_SECRET) as IPayload

        req.user_id = sub
        
        return next()


    }catch(error){
        return res.status(401).json({error})
    }

}