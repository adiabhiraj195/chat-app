import API from "./api";

const UserService = {
    createUser: (payload: {
        fullName: string;
        email: string;
        password: string;
    }) => {
        return API.post("/user", payload);
    },

    login: (payload: {
        email: string;
        password: string;
    }) => {
        return API.post("/auth", payload);
    }
}

export default UserService;