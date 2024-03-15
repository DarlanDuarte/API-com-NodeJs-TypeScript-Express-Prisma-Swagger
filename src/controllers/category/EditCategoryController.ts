import { Request, Response } from "express"
import EditCategoryService from "../../services/category/EditCategoryService"


class EditCategoryController {

    async handle(req: Request, res: Response){
        const {name} = req.body
        const category_id = req.query.category_id as string 


        const editCategory = await EditCategoryService.execute({name, category_id})

        return res.json(editCategory)

    }

}

export default new EditCategoryController()