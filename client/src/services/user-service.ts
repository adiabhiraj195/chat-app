import API from "./api";

const UserService = {
    createUser: (payload: {
        name: string;
        email: string;
        password: string;
    }) => {
        return API.post("/user", payload);
    }
}

export default UserService;