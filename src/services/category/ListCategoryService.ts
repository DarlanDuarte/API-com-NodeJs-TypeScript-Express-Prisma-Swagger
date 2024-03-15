import prismaClient from "../../prisma"

class ListCategoryService {
    async execute(){
        const listCategorys = await prismaClient.category.findMany({
            select:{
                id: true,
                name: true
            }
        })

        return listCategorys

    }
}

export default new ListCategoryService()