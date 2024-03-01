import clsx from "../../../lib/clsx"
import InputField from "../../atoms/input-field";
import { useState } from "react";
import ChatCard from "../../molicules/chat-card/chat-card";

interface ChatSpaceInterface {
    classname?: string;
}

export default function ChatSpace({
    classname,
    ...props
}: ChatSpaceInterface) {
    const [message, setMessage] = useState("");

    const inputMessage = (value: string) => {
        setMessage(value);
        console.log(message);
    }
    return (
        <div className={clsx('bg-gray-700 flex flex-col justify-between', classname)}>
            <div className=" bg-blue-900 h-full">
                <ChatCard
                    message="This is senders message"
                    sender="Raj"
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

                <h1>x</h1>
            </div>
        </div>
    )
}
