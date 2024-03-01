import React from 'react'

interface ChatCardInterface {
    message: string;
    sender: string;
    time?: string;
}

export default function ChatCard ({
    message,
    sender,
    time
}:ChatCardInterface) {
  return (
    <li className='list-none w-full p-3 hover:bg-gray-700'>
        <h1 className='text-red-600'>{sender}</h1>
        <p>{message}</p>
    </li>
  )
}
