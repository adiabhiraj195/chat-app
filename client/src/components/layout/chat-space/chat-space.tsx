import clsx from "../../../lib/clsx"
import InputField from "../../atoms/input-field";
import { useState } from "react";

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
        <div className={clsx('bg-gray-700 ', classname)}>
            This is chatspace  
            <div className="overflow-visible flex flex-row justify-between items-center bg-green-900 fixed bottom-1 pl-4 pr-4 h-fit w-full space-x-1">
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
