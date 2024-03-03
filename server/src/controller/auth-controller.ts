import { Response, Request } from "express";
import { validationResult } from "express-validator";
import usersService from "../services/users-service";

class AuthController {
    login = async (req: Request, res: Response) => {
        const err = validationResult(req);
        if (!(err.isEmpty())) {
            return res.status(400).json(err);
        }

        const { email, password } = req.body;

        const user = await usersService.findUserByEmail(email);

        if (!user) {
            return res.status(400).json({
                error: "User not found"
            });
        };
        console.log(user);
        const checkPassword = await usersService.checkPassword(password, user.password as string);

        if (!checkPassword) {
            return res.status(400).json({
                error: "Password is not correct"
            });
        };
        const authResponce = await usersService.loginResponse(user);
        // console.log(authResponce + "This is auth response");
        return res.status(200).json({
            accessToken: authResponce,
        });
    }
}

const authController = new AuthController();
export default authController;