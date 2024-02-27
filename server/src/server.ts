import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./app";

const PORT = process.env.PORT;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is Live at Port: ${PORT}`)
});