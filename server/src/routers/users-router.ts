import express from "express";
import usersController from "../controller/users-controller";
import userValidator from "../validator/user-validator";

const userRouter = express.Router();

userRouter.post("/", userValidator.register, usersController.createUser);

export default userRouter;