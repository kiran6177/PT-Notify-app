import React from 'react'

function NotifyDetail({notification}) {
  return (
    <div className='w-[90%] flex border-2 border-black rounded-sm p-4 justify-around'>
        <p className='w-[25%] text-center'>{notification?.reciever_details}</p>
        <p className='w-[25%] text-center text-ellipsis overflow-hidden'>{notification?.content}</p>
        <p className='w-[25%] text-center' >{notification?.channel}</p>
        <p className='w-[25%] text-center'><span className={`${notification?.status === 'FAILED' || notification?.status === 'DEAD' ? 'bg-red-500' : notification?.status === 'SENT' ? 'bg-green-500' : 'bg-orange-400' } px-3 py-1 rounded-full text-white tracking-wider`}>{notification?.status}</span></p>
    </div>
  )
}

export default NotifyDetail
