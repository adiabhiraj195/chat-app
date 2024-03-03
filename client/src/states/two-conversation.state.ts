import { create } from "zustand";
import { TwoConversationInterface } from "../lib/types/two-conversation.type";

interface TwoConversationState {
    twoConversation: TwoConversationInterface | null;
    setTwoConversation: (conversation: TwoConversationInterface | null) => void;
}

export const useTwoConversationStore = create<TwoConversationState>()((set) => ({
    twoConversation: null,
    setTwoConversation: (conversation) => set({ twoConversation: conversation })
}));