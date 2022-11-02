import {Router} from "express"
import {likeMethods as likes_} from "../controllers/app_controllers"

const router = Router();

router.get("/:id", likes_.getLike)

router.post("/:id/:id2", likes_.createLike)

router.delete("/:id/:id2", likes_.deleteLike)


export default router