import React from 'react'
import { Link } from 'react-router-dom'
import { BsX } from 'react-icons/bs';
import clsx from '../../../lib/clsx';

interface DmListItemInterface {
  id: string;
  name: String;
  active: Boolean;
}

export default function DmListItem({
  id,
  name,
  active,
}: DmListItemInterface) {
  return (
    <Link to={`/${id}`}>
      <li className={clsx('flex list-none', active?"bg-gray-900":"bg-transparent")}>
        {/* avtar */}
        <div className=''>
          {name}
        </div>

        <button className="text-gray-300 hover:text-white group-hover:block">
          <BsX fontSize={24} />
        </button>
      </li>
    </Link>
  )
}
