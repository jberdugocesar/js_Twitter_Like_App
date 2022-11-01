import {Router} from "express"
import {tweetMethods as tweets_} from "../controllers/app_controllers"

const router = Router();

router.get("/", tweets_.getTweet)

router.post("/", tweets_.createTweet)

router.put("/",tweets_.updateTweet )

router.delete("/", tweets_.deleteTweet)


export default router