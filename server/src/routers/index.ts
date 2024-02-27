import express from "express";
import userRouter from "./users-router";
import authRouter from "./auth.router";

const Router = express.Router();

Router.use("/user", userRouter);
Router.use("/auth", authRouter);

export default Router;