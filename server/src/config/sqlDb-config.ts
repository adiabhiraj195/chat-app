import { Sequelize } from "sequelize";

const sequelize = new Sequelize("discord", "root", "abhiyadav141", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

export default sequelize;