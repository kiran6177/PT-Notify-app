import { useState } from 'react';
import './App.css';
import Notification from './Components/Notification';
import NotificationView from './Components/NotificationView';

function App() {
  const [selected,setSelected] = useState('SEND');

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-cyan-950 to-black flex pt-[6rem] items-center flex-col">
        <h2 className='text-[3.5rem] tracking-widest text-white'>NOTIFY APP</h2>
        <div className='bg-cyan-950 w-[15%] flex rounded-sm border-2 border-black mb-4'>
          <h2 onClick={()=>setSelected('SEND')} className={`${selected === 'SEND' && 'bg-cyan-800'} cursor-pointer py-2 w-[50%] text-center tracking-widest text-white`}>SEND</h2>
          <h2 onClick={()=>setSelected('READ')} className={`${selected === 'READ' && 'bg-cyan-800'} cursor-pointer py-2 w-[50%] text-center tracking-widest text-white`}>READ</h2>
        </div>
        {selected === 'SEND' ? <Notification/> : <NotificationView/>}
    </div>
  );
}

export default App;
