import { useUserStore } from '../../states/user.state';
import SideBar from '../../components/layout/sideBar';
import ChatSpace from '../../components/layout/chat-space/chat-space';
import ServerBar from '../../components/layout/server-bar/server-bar';
import HeaderTab from '../../components/layout/header-tab/header-tab';

export default function Page() {
  const name = useUserStore(state => state.currentUser?.name);
  // const currentUser = useUserStore((state)=> state.currentUser);

  // console.log(currentUser);

  return (
    <div className='w-screen h-screen bg-blue-200 flex'>
      <ServerBar />

      <div className='flex flex-col justify- w-full'>
        <HeaderTab name={name as string} />

        <div className='flex w-full bg-yellow-500 h-screen'>
          <SideBar classname='h-full w-60' />
          <ChatSpace classname='h-full  w-full' />

        </div>
      </div>
    </div>
  )
}
