import prismaClient from "../../prisma"


interface IRemoveProduct {
    product_id: string
}

class RemoveProductService {
    async execute({product_id}: IRemoveProduct){
        if(!product_id){
            throw new Error("Id do produto não foi enviado!")
        }

        const removeProduct = await prismaClient.product.delete({
            where: {
                id: product_id
            }
        })

        return removeProduct
    }
}

export default new RemoveProductService()