import {Router} from "express"
import {tweetMethods as tweets_} from "../controllers/app_controllers"

const router = Router();

router.get("/", tweets_.getTweets)

router.get("/:id/", tweets_.getTweet)

router.get("/user/:id", tweets_.getUserTweets)

router.post("/", tweets_.createTweet)

router.put("/:id",tweets_.updateTweet )

router.delete("/:id", tweets_.deleteTweet)


export default router