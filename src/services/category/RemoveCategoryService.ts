import { IRemoveCategory } from "../../models/interfaces/category/RemoveCategory"
import prismaClient from "../../prisma"

class RemoveCategoryService {
    async execute({category_id} : IRemoveCategory){
        if(!category_id || category_id === ""){
            throw new Error("Id da categoria não foi passada!")
        }

        const removeCategory = await prismaClient.category.delete({
            where: {
                id: category_id
            }
        })

        return removeCategory
    }
}

export default new RemoveCategoryService()