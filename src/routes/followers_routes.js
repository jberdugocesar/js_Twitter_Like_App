import {Router} from "express"
import {followerMethods as followers_} from "../controllers/app_controllers"

const router = Router();

router.get("/", followers_.getFollower)

router.post("/", followers_.createFollower)

router.delete("/", followers_.deleteFollower)


export default router