import React from 'react'
import SideBar from '../../layout/sideBar'
import DmChannelList from '../../molicules/dm-channel-list'

export default function DmLayout() {
  return (
    <SideBar>
        <DmChannelList/>
    </SideBar>
  )
}
