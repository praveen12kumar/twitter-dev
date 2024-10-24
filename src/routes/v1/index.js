import express from 'express';
const router = express.Router();
import {createTweet, getTweet} from "../../controllers/tweet-controller.js";
import {toogleLike} from "../../controllers/like-controller.js";
import { createComment } from '../../controllers/comment-controller.js';
import {signup} from "../../controllers/auth-controller.js";


router.post('/tweets',createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle',toogleLike);

router.post('/comments', createComment);

router.post('/signup', signup);

export default router;