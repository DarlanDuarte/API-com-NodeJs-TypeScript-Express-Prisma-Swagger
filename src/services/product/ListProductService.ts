import prismaClient from "../../prisma"


interface IListProduct{
    category_id: string
}

class ListProductService {
    async execute({category_id}: IListProduct){
        if(!category_id){
            throw new Error("Id da categoria não foi passado!")
        }

        const ListProduct = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        })

        return ListProduct
    }
}


export default new ListProductService()