import prismaClient from "../../prisma"


class DetailUserSevice {
    async execute(user_id: string){
        if(!user_id){
            throw new Error("Id do usuário não foi passado")
        }

        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return {
            ...user
        }


    }
}


export default new DetailUserSevice()