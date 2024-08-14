import React, { useEffect, useState } from 'react'
import axios from '../axiosConfig'
import NotifyDetail from './NotifyDetail';

function NotificationView() {
    const [notifications,setNotifications] = useState(null);

    useEffect(()=>{
      async function fetchNotifications(){
        try {
          const response = await axios.get('/get-notifications')
          setNotifications(response?.data || []);
        } catch (error) {
          console.log(error);
        }
      }
      fetchNotifications()
    },[])
        
  return (
    <div className='w-[75%] px-5 py-8 bg-slate-300 rounded-md border-2 border-black flex flex-col items-center '>
        <h2 className='text-3xl tracking-widest my-5'>NOTIFICATIONS</h2>
        
        <div className='w-[90%] flex border-2 border-black rounded-sm p-4 justify-around bg-cyan-950'>
            <p className='w-[25%] text-white text-center'>RECIEVER</p>
            <p className='w-[25%] text-ellipsis overflow-hidden text-white text-center'>CONTENT</p>
            <p className='w-[25%] text-white text-center'>CHANNEL</p>
            <p className='w-[25%] text-white text-center'>STATUS</p>
        </div>
        {
          notifications?.length > 0 && notifications.map(noti=>{
            return <NotifyDetail key={noti?._id} notification={noti} />
          })
        }
    </div>
  )
}

export default NotificationView
