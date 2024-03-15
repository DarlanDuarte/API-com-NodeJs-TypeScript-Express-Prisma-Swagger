import { Request, Response } from "express"
import RemoveCategoryService from "../../services/category/RemoveCategoryService"


class RemoveCategoryController {
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string
        
        const removeCategory = await RemoveCategoryService.execute({category_id})

        return res.json({message: "Category deleted sucessfull"})

    }

}

export default new RemoveCategoryController()