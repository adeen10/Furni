import express from 'express'
import * as usercontrols from '../controller/userController.js'



const userRouter = express();


userRouter.post('/login',usercontrols.login)


userRouter.post('/signup',usercontrols.signup)

userRouter.post('/getusergata',usercontrols.getuserdata)

userRouter.post('/sendproduct', usercontrols.getproductdata)


export default userRouter;