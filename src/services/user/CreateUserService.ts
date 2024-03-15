import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'
import { ICreateUser } from "../../models/interfaces/user/UserRequest";


class CreateUserService {
    async execute({name, email, password} : ICreateUser){
        if(!email){
            throw new Error("Email incorrect")
        }

        
    const emailAreadyExist = await prismaClient.user.findFirst({
        where: {
            email: email
        }
    })

    if(emailAreadyExist){
        throw new Error("Email Aready Exist")
    }


    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash

      },
      select:{
        id: true,
        name: true,
        email: true
      }
    })

    return {...user}
  }
}


export default new CreateUserService()