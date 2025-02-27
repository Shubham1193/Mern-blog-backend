import express from 'express';
// import { test, updateUser } from '../controllers/user.controller.js';
import { deleteUser, test, updateUser , getUsers, getUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);
router.get('/getusers', verifyToken, getUsers);
router.get('/comment/:userId', getUser);

export default router;