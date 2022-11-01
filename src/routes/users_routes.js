import {Router} from "express"
import {userMethods as users_} from "../controllers/app_controllers"

const router = Router();

router.get("/", users_.getUser)

router.post("/", users_.createUser)

router.put("/", users_.updateUser)

router.delete("/", users_.deleteUser)


export default router