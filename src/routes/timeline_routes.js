import {Router} from "express"
import {timelineMethods as timeline_} from "../controllers/app_controllers"

const router = Router();

router.get("/", timeline_.getTimeline)

export default router