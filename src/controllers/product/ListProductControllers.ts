import {Request, Response} from 'express'
import ListProductService from '../../services/product/ListProductService'





class ListProductController {
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string

        const listProduct = await ListProductService.execute({category_id})


        return res.json(listProduct)
    }
}


export default new ListProductController()