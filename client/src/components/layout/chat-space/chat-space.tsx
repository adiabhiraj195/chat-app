import clsx from "../../../lib/clsx"
import InputField from "../../atoms/input-field";
import { useState } from "react";
import ChatCard from "../../molecules/chat-card/chat-card";
import TwoConversationService from "../../../services/two-coversation.service";

interface ChatSpaceInterface {
    classname?: string;
}

export default function ChatSpace({
    classname,
    ...props
}: ChatSpaceInterface) {
    const [message, setMessage] = useState<string>("");

    const inputMessage = (value: string) => {
        setMessage(value);
        // console.log(message);
    }
    const handleSendMessage = async ()=>{
        if(message == "") return;
        try {
            const response = await TwoConversationService.sendMessage({
                reciver_id: "",
                body: message
            })
        } catch (error) {
            
        }
    }
    return (
        <div className={clsx('bg-gray-700 flex flex-col justify-between', classname)}>
            <div className=" bg-blue-900 h-full">
                <ChatCard
                    body="This is senders message"
                    sender_name="Raj"
                />

            </div>
            <div className="overflow-visible flex flex-row justify-between items-center bg-green-900 pl-4 pr-4 h-fit w-full space-x-1">
                {/* fix inpute overflow problem */}

                <InputField
                    classname="w-full"
                    value={message}
                    type="text"
                    oninput={inputMessage}
                    placeholder="Type your message"
                />

                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}
