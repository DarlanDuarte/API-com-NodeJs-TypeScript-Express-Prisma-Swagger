import { Router, Request, Response } from "express";
import CreateUserController from "./controllers/user/CreateUserController";
import AuthUserController from "./controllers/user/AuthUserController";
import isAuthenticated from "./middlewares/isAuthenticated";
import DetailUserController from "./controllers/user/DetailUserController";
import RemoveUserController from "./controllers/user/RemoveUserController";

const router = Router()

router.get('/test', (req: Request, res: Response) =>{
    return res.json({ok: true})
})

router.post('/user', CreateUserController.handle)
router.post('/login', AuthUserController.handle)
router.get("/me", isAuthenticated, DetailUserController.handle)
router.delete("/user/remove", RemoveUserController.handle)




export default router