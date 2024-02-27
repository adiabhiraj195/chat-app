import React from 'react';
import clsx from '../../../lib/clsx';

export default function SideBar({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "fixed left-[70px] z-10 h-screen w-60 bg-midground"
      )}
      {...props}
    >
      {children}
    </div>
  )
}
