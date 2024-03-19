import { Request, Response } from "express"
import SaleProductService from "../../services/sale/SaleProductService"
import { ISaleProduct } from "../../models/interfaces/sale/SaleProduct"


class SaleProductController {

    async handle(req: Request, res: Response){
        const product_id = req?.query.product_id as string
        const {amount}: ISaleProduct = req.body

        const saleProduct = await SaleProductService.execute({product_id, amount})

        return res.json(saleProduct)

    }

}

export default new SaleProductController()