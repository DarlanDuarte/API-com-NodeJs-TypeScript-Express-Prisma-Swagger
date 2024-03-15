import { Request, Response } from "express";
import CreateCategoryService from "../../services/category/CreateCategoryService";
import { ICreateCategory } from "../../models/interfaces/category/CreateCategory";

class CreateCategoryController {
    async handle(req: Request, res: Response){
        const {name} : ICreateCategory = req.body

        const category = await CreateCategoryService.execute({name})

        return res.json(category)
    }
}


export default new CreateCategoryController()
