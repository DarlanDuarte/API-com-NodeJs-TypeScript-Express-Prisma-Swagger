import { ICreateProduct } from "../../models/interfaces/product/CreateProduct";
import prismaClient from "../../prisma";

class CreateProductService {
    async execute({name, price, description, banner, category_id, amount} : ICreateProduct){
        

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner, 
                category_id: category_id,
                amount: +amount
            }
        })

        return product;

    }
}


export default new CreateProductService()