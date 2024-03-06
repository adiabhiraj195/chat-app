import API from "./api";

const TwoConversationService = {
    sendMessage: async (payload: {
        reciver_id: string;
        body: string;
    }) => {
        return await API.post(`/me/conversation${payload.reciver_id}`, payload);
    }
}

export default TwoConversationService;