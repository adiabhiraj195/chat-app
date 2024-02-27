import { body } from "express-validator";

class UserValidator {
    register = [
        // body("fullName")
        //     .isEmpty()
        //     .withMessage("Must provide a Name"),
        body("email")
            .isEmail()
            .normalizeEmail()
            .withMessage("Must provide a valid email address"),
        // custom validator with database 
        body("password")
            .isLength({ min: 8, max: 24 })
            .withMessage("Password must be 8 to 24 letters")
    ]
}

const userValidator = new UserValidator();
export default userValidator;