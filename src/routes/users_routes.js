import {Router} from "express"
import {userMethods as users_} from "../controllers/app_controllers"

const router = Router();

router.get("/", users_.getUsers)

router.get("/:id", users_.getUser)

router.post("/", users_.createUser)

router.put("/:id", users_.updateUser)

router.delete("/:id", users_.deleteUser)


export default router