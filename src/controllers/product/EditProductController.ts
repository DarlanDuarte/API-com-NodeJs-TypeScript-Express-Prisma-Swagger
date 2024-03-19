import { Request, Response } from "express"
import EditProductService from "../../services/product/EditProductService"
import { IEditProduct } from "../../models/interfaces/product/EditProduct"



class EditProductController {

    async handle(req: Request, res: Response) {
        const {name, price, banner, description, amount, product_id}: IEditProduct = req.body


        const editProduct = await EditProductService.execute({name, price, banner, description, amount, product_id})

        return res.status(200).json(editProduct)

    }

}




export default new EditProductController()