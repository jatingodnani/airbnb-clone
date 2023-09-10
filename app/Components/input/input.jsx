import React from 'react'

function Input({type,label}) {
  return (
    <div className='w-full relative'>
        <input 
        type={type}
        placeholder=''
        className='peer 
                   w-full
                   p-4
                   
                   relative 
                   z-100
                   border-[1px]
                   font-light 
                   bg-white 
              
                   rounded-md
                   outline-none
                   transition'/>
        <label className={  `absolute 
          text-md
           left-2
           top-3
           peer-placeholder-shown:scale-100 
           peer-placeholder-shown:translate-y-0 
           peer-focus:scale-75
           peer-focus:-translate-y-4
       
          ` }>{label}</label>
    </div>
  )
}

export default Input