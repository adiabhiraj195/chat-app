import React from 'react';
import clsx from '../../../lib/clsx';
import DmLayout from '../../organism/dm-layout';

interface SideBarInterface {
  classname?: string;

}

export default function SideBar({
  classname,
  ...props
}: SideBarInterface) {
  return (
    <div
      className={clsx(
        " bg-gray-800", classname
      )}
    >
      <DmLayout />
    </div>
  )
}
