import { IEditCategory } from "../../models/interfaces/category/EditCategory"
import prismaClient from "../../prisma"


class EditCategoryService {
    async execute({name, category_id} : IEditCategory){
        if(!name || name === " " || !category_id || category_id === " "){
            throw new Error("Invalid name or category_id")
        }

        const editCategory = await prismaClient.category.update({
            where: {
                id: category_id
            },
            data: {
                name: name
            },
            select:{
                id: true,
                name: true
            }
        })

        return {
            ...editCategory
        }
    }

}


export default new EditCategoryService()