import { ICreateProduct } from "../../models/interfaces/product/CreateProduct"
import CreateProductService from "../../services/product/CreateProductService"
import { Request, Response } from "express"

class CreateProductController {
    async handle(req: Request, res: Response){
        const {name, price, description, banner, category_id, amount}: ICreateProduct = req.body
        

        if(!req.file){
            throw new Error("Error sending image")
        }else{
            const {originalname, filename: banner} = req.file
            const product = await CreateProductService.execute({name, price, description, banner, category_id, amount})

            return res.json(product)
        }



    }

}

export default new CreateProductController()