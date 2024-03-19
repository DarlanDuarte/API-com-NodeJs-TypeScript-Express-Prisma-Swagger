import { Request, Response } from "express"
import RemoveProductService from "../../services/product/RemoveProductService"

class RemoveProductController {
    async handle(req: Request, res: Response){
        const product_id = req.query.product_id as string

        const removeProduct = await RemoveProductService.execute({product_id})

        return res.json({message: "Produto deletado com sucesso!"})
    }


}

export default new RemoveProductController()