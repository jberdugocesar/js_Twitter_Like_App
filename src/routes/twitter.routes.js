import {Router} from "express"
import {methods as twitterController} from "../controllers/app_controllers"

const router = Router();

router.get("/", twitterController.getTweets)

export default router