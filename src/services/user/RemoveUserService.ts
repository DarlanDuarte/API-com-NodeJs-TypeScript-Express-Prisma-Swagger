import { IRemoveUserRequest } from "../../models/interfaces/user/RemoveUserRequest"
import prismaClient from "../../prisma"


class RemoveUserService {

    async execute({user_id} : IRemoveUserRequest){
        if(!user_id){
            throw new Error("Id do usuário não foi passado!")
        }

        const removeUser = await prismaClient.user.delete({
            where:{
                id: user_id
            }
        })

        return removeUser

    }
}


export default new RemoveUserService()