
import { IEditProduct } from "../../models/interfaces/product/EditProduct";
import prismaClient from "../../prisma";



class EditProductService {
    async execute({name, price, banner, description, amount, product_id} : IEditProduct){
        if(!name || !price || !description || !amount || !product_id){
            throw new Error("Informações requeridas não foram passadas")
        }
        

        const editProduct = await prismaClient.product.update({
            where:{
                id: product_id
            },
            data:{
                name: name,
                price: price,
                banner: banner,
                description: description,
                amount: +amount

            }

            
        })
        return editProduct


    }
}


export default new EditProductService()