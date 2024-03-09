import React from 'react';

interface ChatCardInterface {
  body: string;
  sender_name: string;
  time?: string;
}

export default function ChatCard({
  body,
  sender_name,
  time
}: ChatCardInterface) {
  return (
    <li className='list-none w-full p-3 hover:bg-gray-700'>
      <h1 className='text-red-600'>{sender_name}</h1>
      <p>{body}</p>
    </li>
  )
}