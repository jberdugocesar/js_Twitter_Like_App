import {Router} from "express"
import {followerMethods as followers_} from "../controllers/app_controllers"

const router = Router();

router.get("/following/:id/", followers_.getFollowing)

router.get("/follower/:id/", followers_.getFollower)

router.post("/:id/:id2", followers_.createFollower)

router.delete("/:id/:id2", followers_.deleteFollower)


export default router