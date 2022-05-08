import express from "express";
const router= express.Router()
import controlleruser from "../controller/usercontroller.js";
router.get('/',controlleruser.home)
router.get('/register',controlleruser.register)
router.post('/register',controlleruser.registrationdata)
router.get('/login',controlleruser.login)
router.post('/login',controlleruser.logindata)





export default router
