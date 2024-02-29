import { Request, Response } from "express";
import { validationResult } from "express-validator";
import usersService from "../services/users-service";

class UsersController {
    createUser = async (req: Request, res: Response) => {
        const err = validationResult(req);
        if (!(err.isEmpty())) {
            console.log(err);
            return res.status(400).json(err);
        }

        const { fullName, email, password } = req.body;
        // check if user is already present in database 

        await usersService.createUser(fullName, email, password);
        console.log("Created");

        return res.status(200).json("created");
    }
}

const usersController = new UsersController();
export default usersController;