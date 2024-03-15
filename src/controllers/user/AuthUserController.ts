import { Request, Response } from "express";
import AuthUserService from "../../services/user/AuthUserService";
import { IAuthRequest } from "../../models/interfaces/user/auth/AuthRequest";


class AuthUserController {
    async handle(req: Request, res: Response){
        const {email, password}: IAuthRequest = req.body

        const auth = await AuthUserService.execute({email, password})

        return res.status(200).json(auth)
        
    }

}




export default new AuthUserController