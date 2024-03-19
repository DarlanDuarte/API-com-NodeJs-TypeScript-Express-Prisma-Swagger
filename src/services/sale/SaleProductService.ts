import { ISaleProduct } from "../../models/interfaces/sale/SaleProduct"
import prismaClient from "../../prisma"



class SaleProductService {
    async execute({product_id, amount} : ISaleProduct){
        if(!product_id || !amount){
            throw new Error("Id do produto ou quantidade não foram enviados!")
        }

        const saleProduct = await prismaClient.product.findFirst({
            where:{
                id: product_id
            }
        })

        if(saleProduct?.amount > amount && amount > 0){
            const newAmount = (saleProduct?.amount - amount)
            const saveProduct = await prismaClient.product.update({
                where:{
                    id: product_id
                },
                data:{
                    amount: +newAmount
                },
                select:{
                    id: true,
                    name: true,
                    price: true,
                    amount: true
                }
            })

            return saveProduct
        }

        throw new Error("Não foi possivel efetuar a venda!")

    }
}


export default new SaleProductService()