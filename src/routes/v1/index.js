import express from 'express';
const router = express.Router();
import {createTweet} from "../../controllers/tweet-controller.js";
import {toogleLike} from "../../controllers/like-controller.js";

router.post('/tweets',createTweet);
router.post('/likes/toggle',toogleLike);


export default router;