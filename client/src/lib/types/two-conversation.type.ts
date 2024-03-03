export interface MessageInterface {
    message_id: string,
    body: string,
    sender_id: string,
    reciver_id: string,
    time: string,
}

export interface TwoConversationInterface {
    conversation_id: string;
    messages: [MessageInterface];
}