import React from 'react'
import { Link } from 'react-router-dom'
import {BsX} from 'react-icons/bs';

interface DmChannelListItemInterface {
  name: String;
  active: Boolean;
}

export default function DmChannelListItem({
  name,
  active,
}: DmChannelListItemInterface) {
  return (
    <Link to={`/channelx`}>
      <li className=''>
        {/* avtar */}
        <div className=''>
          {name}
        </div>

        <button className="hidden text-gray-300 hover:text-white group-hover:block">
          <BsX fontSize={24} />
        </button>
      </li>
    </Link>
  )
}
