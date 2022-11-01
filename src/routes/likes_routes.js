import {Router} from "express"
import {likeMethods as likes_} from "../controllers/app_controllers"

const router = Router();

router.get("/", likes_.getLike)

router.post("/", likes_.createLike)

router.delete("/", likes_.deleteLike)


export default router