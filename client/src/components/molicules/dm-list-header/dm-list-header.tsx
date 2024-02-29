import React from 'react'
import { FaPlus } from "react-icons/fa6";

export default function DmListHeader() {
    return (
        <div className='flex items-center justify-between'>
            <p>DIRECT MESSAGES</p>
            <button className='hover:bg-gray-400'>
                <FaPlus />
            </button>
        </div>
    )
}
