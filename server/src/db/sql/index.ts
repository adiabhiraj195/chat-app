import { Sequelize } from "sequelize";
import sequelize from "../../config/sqlDb-config";
import { Users } from "./users.model";


const sqlDb = {
    Sequelize,
    sequelize,
    Users
}

export default sqlDb;