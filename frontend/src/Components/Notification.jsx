import React, { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { toast, Toaster } from 'sonner';
import axios from '../axiosConfig'

let CHANNELS = ['EMAIL','SMS','PUSH']

function Notification() {
    const [showDrop,setShowDrop] = useState(false);
    const [channel,setChannel] = useState('');
    const [reciever,setReciever] = useState('');
    const [content,setContent] = useState('');

    const handleSend = async ()=>{
        if(!content || !reciever || !channel){
            toast.error('Oops!! Missing Information!!')
            return
        }
        const data = {reciever,content,channel}
        try {
            const response = await axios.post('/send-notification',data);
            if(response?.data){
                toast.success('Notification Initaited.')
            }
        } catch (error) {
            if(error.response?.data?.error){
                toast.error(error.response?.data?.error)
            }
        }
        
    }

  return (
    <div className='w-[45%] px-5 py-8 bg-slate-300 rounded-md border-2 border-black flex flex-col items-center gap-5 '>
        <Toaster richColors />
        <div className='w-[90%] flex flex-col items-center gap-2' >
            <label htmlFor="to" className='self-start text-xl'>Specify Receiver Detail</label>
            <input type="text" id='to' value={reciever} onChange={(e)=>setReciever(e.target.value)} className='border-2 border-black rounded-sm px-3 py-2 w-[100%] tracking-wider bg-slate-300' placeholder='pearlthoughts@gmail.com' />
        </div>
        <div className='w-[90%] flex flex-col items-center gap-2' >
            <label htmlFor="content" className='self-start text-xl'>Write Your Content Here</label>
            <textarea  id="content" value={content} onChange={(e)=>setContent(e.target.value)} className='border-2 border-black rounded-sm px-3 py-2 w-[100%] tracking-wider bg-slate-300' placeholder='Hi Reciever, This is a Test Email Notification'></textarea>
        </div>
        <div className='w-[90%] flex flex-col items-center gap-2' >
            <label htmlFor="to" className='self-start text-xl'>Select Channel</label>
            <div className='w-[100%] relative'>
                <p className='border-2 border-black rounded-sm px-3 py-2 w-[100%] tracking-wider flex items-center justify-between bg-slate-300' onClick={()=>setShowDrop(prev=>!prev)}>{channel !== "" ? channel : 'Choose a channel'} <FaChevronDown/> </p>
                {showDrop && 
                <div className='absolute w-[100%] max-h-[10rem] overflow-scroll  scrollbar-none'>
                    {
                        CHANNELS.map(channel=>{
                            return <p key={channel} onClick={()=>{setChannel(channel);setShowDrop(false)}} className='bg-slate-300 border-2 border-black my-[1px] rounded-sm px-3 py-2 w-[100%] tracking-wider'>{channel}</p>
                        })
                    }
                </div>}
            </div>
        </div>
        <div className='w-[90%] flex flex-col items-center gap-2'>
            <button onClick={handleSend} className='bg-cyan-800 w-[90%] py-3 border-2 border-black rounded-md text-xl tracking-widest text-white hover:scale-[1.04] transition-all duration-200 ease-linear'>SEND NOTIFICATION</button>
        </div>
    </div>
  )
}

export default Notification
