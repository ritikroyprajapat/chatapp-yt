import express from 'express';
import { allUsers, signup } from "../controller/user.controller.js";
import { login } from '../controller/user.controller.js';
import { logout } from '../controller/user.controller.js';
import SecureRoute from '../middleware/Secure.route.js';
const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/allusers",SecureRoute,allUsers)

export default router;