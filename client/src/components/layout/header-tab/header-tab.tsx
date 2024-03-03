import React from 'react'

interface HeaderTabInterface {
  name: string;
}

export default function HeaderTab({name}:HeaderTabInterface) {
  console.log(name + " console in header");
  return (
    <div className='w-full h-12 bg-pink-500 flex justify-between'>
        <h1>{name}</h1>
        <h1>Header Tab2</h1>
    </div>
  )
}
