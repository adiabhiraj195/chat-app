import API from "./api";

const UserService = {
    createUser: (payload: {
        name: string;
        email: string;
        password: string;
    }) => {
        return API.post("/user", payload);
    },

    searchFriend: async (payload: {
        accessToken: string;
        friend_name: string;
    })=>{
        return await API.post("/user/searchFriend", payload);
    }
}

export default UserService;