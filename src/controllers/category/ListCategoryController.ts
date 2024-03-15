import { Request, Response } from "express"
import ListCategoryService from "../../services/category/ListCategoryService"

class ListCategoryController {
    async handle(req: Request, res: Response){
        const listCategorys = await ListCategoryService.execute()
        return res.json(listCategorys)
    }
}


export default new ListCategoryController()