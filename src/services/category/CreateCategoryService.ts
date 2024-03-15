import prismaClient from "../../prisma"
import { ICreateCategory } from "../../models/interfaces/category/CreateCategory"


class CreateCategoryService {
    async execute({name}: ICreateCategory){
        if(!name || name === "" || name === null){
            throw new Error("Nome da Categoria não foi passada")
        }

        const category = await prismaClient.category.create({
            data:{
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })

        return category

    }


}

export default new CreateCategoryService()