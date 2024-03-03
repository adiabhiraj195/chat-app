import { useUserStore } from "../states/user.state"
import AuthService from "../services/auth-service";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
    const { currentUser, setCurrentUser } = useUserStore();
    // const setCurrentUser = useUserStore((state)=> state.setCurrentUser);


    const login = async (email: string, password: string) => {
        try {
            const response = await AuthService.login({ email, password });
            const token = response.data.accessToken;
            // console.log(token);
            setCurrentUser(jwtDecode(token));
            localStorage.setItem("Token", token);
            console.log(currentUser);
        } catch (error) {
            console.log(error);
        }
        
    }
    console.log(currentUser);

    return ({
        login,
        currentUser,
    })
}