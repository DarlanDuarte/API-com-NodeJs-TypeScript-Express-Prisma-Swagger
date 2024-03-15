import { Router, Request, Response } from "express";
import CreateUserController from "./controllers/user/CreateUserController";
import AuthUserController from "./controllers/user/AuthUserController";
import isAuthenticated from "./middlewares/isAuthenticated";
import DetailUserController from "./controllers/user/DetailUserController";
import RemoveUserController from "./controllers/user/RemoveUserController";
import CreateCategoryController from "./controllers/category/CreateCategoryController";
import EditCategoryController from "./controllers/category/EditCategoryController";
import ListCategoryController from "./controllers/category/ListCategoryController";
import RemoveCategoryController from "./controllers/category/RemoveCategoryController";

const router = Router()

router.get('/test', (req: Request, res: Response) =>{
    return res.json({ok: true})
})

// User Routes
router.post('/user', CreateUserController.handle)
router.post('/login', AuthUserController.handle)
router.get("/me", isAuthenticated, DetailUserController.handle)
router.delete("/user/remove", RemoveUserController.handle)


//Category Routes
router.post('/category', isAuthenticated, CreateCategoryController.handle)
router.put("/category/edit", isAuthenticated, EditCategoryController.handle)
router.get("/category/all", isAuthenticated, ListCategoryController.handle)
router.delete("/category/remove", isAuthenticated, RemoveCategoryController.handle)


export default router