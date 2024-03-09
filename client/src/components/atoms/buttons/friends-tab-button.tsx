import React from 'react'
import clsx from '../../../lib/clsx';

interface FriendsTabButtonInterface {
    classname?: string;
    button_name: string;
}

export const FriendsTabButton = ({
    classname,
    button_name,
}: FriendsTabButtonInterface) => {

  return (
    <li className={clsx(classname, "list-none")}>
        {button_name}
    </li>
  )
}
