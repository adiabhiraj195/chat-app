import { create } from "zustand";
import { UserInterface } from "../lib/types/user.type";

interface UserStoreInterface {
    currentUser: UserInterface | null;
    setCurrentUser: (user: UserInterface | null) => void;
}

export const useUserStore = create<UserStoreInterface>()((set) => ({
    currentUser: null,
    setCurrentUser: (user: UserInterface | null) => set(()=>({ currentUser: user })),
}));
