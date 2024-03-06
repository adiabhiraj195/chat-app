import API from "./api";

const AuthService = {
    
    login: (payload: {
        email: string;
        password: string;
    }) => {
        return API.post("/auth", payload);
    }
}

export default AuthService;