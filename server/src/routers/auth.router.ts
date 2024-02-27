import {Router} from "express";
import authController from "../controller/auth-controller";
import authValidator from "../validator/auth-validator";

const authRouter = Router();

authRouter.use("/",authValidator.login, authController.login);

export default authRouter;