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
import multer from "multer";
import uploadConfig from './config/multer'
import CreateProductController from "./controllers/product/CreateProductController";
import EditProductController from "./controllers/product/EditProductController";
import ListProductControllers from "./controllers/product/ListProductControllers";
import ListProductsController from "./controllers/product/ListProductsController";
import RemoveProductController from "./controllers/product/RemoveProductController";

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))


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

//Product Routes
router.post("/product", isAuthenticated, upload.single('file') ,CreateProductController.handle)
router.put("/product/edit", isAuthenticated, upload.single("file"), EditProductController.handle)
router.get("/product", isAuthenticated, ListProductControllers.handle )
router.get("/products", isAuthenticated, ListProductsController.handle)
router.delete("/product/remove", isAuthenticated, RemoveProductController.handle)

export default router