import { body } from "express-validator";

class AuthValidator {
    login = [
        body("email")
            .isEmail()
            .normalizeEmail()
            .withMessage("Must provide a valid email address"),
        body("password")
            .isLength({ min: 8 })
            .withMessage("Enter a valid Password")
    ]
}

const authValidator = new AuthValidator();
export default authValidator;