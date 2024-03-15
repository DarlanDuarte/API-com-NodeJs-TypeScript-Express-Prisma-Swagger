import {Request, Response} from 'express'
import CreateUserService from '../../services/user/CreateUserService'
import { ICreateUser } from '../../models/interfaces/user/UserRequest'



class CreateUserController {
    async handle(req: Request, res: Response){
    
    const {name, email, password}: ICreateUser = req.body

    const user = await CreateUserService.execute({name, email, password})

    return res.status(200).json(user)


  }
}


export default new CreateUserController()