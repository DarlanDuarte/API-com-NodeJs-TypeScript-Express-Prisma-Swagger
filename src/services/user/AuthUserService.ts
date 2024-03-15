import { IAuthRequest } from "../../models/interfaces/user/auth/AuthRequest";
import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

class AuthUserService {
    async execute({email, password} : IAuthRequest){
        if(!email || !password){
            throw new Error("Email ou Password não foram passados!")
        }

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user){
            throw new Error("Wrong username or password!")
        }

        const passwordMath = await compare(password, user?.password)

        if(!passwordMath){
            throw new Error("Wrong Password!")
        }

        const token =  sign(
            {
                name: user?.name,
                email: user?.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: user?.id,
                expiresIn: "7d"
            }
        )

        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token

        }


    }
}



export default new AuthUserService()