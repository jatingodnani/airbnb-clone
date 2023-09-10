"use client"
import {useCallback, useState} from 'react'
import  {AiOutlineMenu} from "react-icons/ai";
import Avtar from './Avtar';
import Menuitem from './Menuitem';
import useRegisterhook from '@/app/hooks/useRegister';
import useLoginModal from '@/app/hooks/useLofin';
function Usermenu() {
  const [open,setopen]=useState(false);
  const registerModal = useRegisterhook();
  const loginModal=useLoginModal();
  const togglebutton=useCallback(()=>{
       setopen(prev=>!prev)
  },[]);
  
    return (
    <div className='relative '>
        <div className='flex flex-row items-center gap-3'>
        <div className='hidden md:block text-sm font-bold rounded-full hover:bg-neutral-100 transition cursor-pointer px-4  py-3 '>
            Airbnb Your Home
        </div>
        <div
        onClick={togglebutton}
        className='flex border-[1px] py-3 px-3 border-neutral-200 md:px-1 md:py-1 items-center cursor-pointer hover:shadow-md gap-3 rounded-full'>  
        <AiOutlineMenu/> 
        <div className=''>
            <Avtar/>
            </div>
        </div>
        </div>
{
    open &&
     <div className='absolute w-[40vw] md:w-3/4 bg-white rounded-xl shadow-md overflow-hidden text-sm right-2 top-14
     '>
        <div className='flex flex-col cursor-pointer'>
            
            <Menuitem
             label="Sign-up"
             onClick={registerModal.onOpen}
             registerModal={registerModal}
             />


            <Menuitem
              onClick={loginModal.onOpen}
             label="login"/>
        </div>
     </div>
}
    </div>
  )
}

export default Usermenu