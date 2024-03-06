import { useUserStore } from "../states/user.state"
import AuthService from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
import { UserInterface } from "../lib/types/user.type";

export const useAuth = () => {
    const { currentUser, setCurrentUser } = useUserStore();
    // const setCurrentUser = useUserStore((state)=> state.setCurrentUser);


    const login = async (accessToken: string) => {
        const decoded: any = jwtDecode(accessToken);
        // console.log(decoded.user)
        setCurrentUser(decoded.user as UserInterface);
        // console.log(currentUser);

    }

    // const login = async (email: string, password: string) => {
    //     try {
    //         const response = await AuthService.login({ email, password });
    //         const token = response.data.accessToken;
    //         // console.log(token);
    //         setCurrentUser(jwtDecode(token));
    //         localStorage.setItem("Token", token);
    //         console.log(currentUser);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }
    // console.log(currentUser);

    return ({
        login,
        currentUser,
    })
}