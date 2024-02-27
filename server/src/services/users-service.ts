import sqlDb from "../db/sql";
import jwt from "jsonwebtoken";
import { genSalt, hash, compare } from "bcrypt";

class UsersService {
    createUser = async (fullName: string, email: string, password: string) => {
        const salt = await genSalt();
        const hashPassword = await hash(password, salt);
        // const verificatioToken = jwt

        await sqlDb.Users.create({
            fullName,
            email,
            password: hashPassword
        });

        return;
    }

    findUserByEmail = async (email: string) => {
        return await sqlDb.Users.findOne({ where: { email } });
    };

    checkPassword = async (inputPassword: string, password: string) => {
        return await compare(inputPassword, password);
    };

    loginResponse = (email: string) => {
        // console.log(process.env.ACCESS_TOKEN_SECRET);
        return jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET as string)
    }
}

const usersService = new UsersService();
export default usersService;