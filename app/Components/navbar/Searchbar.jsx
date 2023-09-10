"use-client"
import React from 'react'
import {BiSearch} from "react-icons/bi"
function Searchbar() {
  return (
    <div className='      max-w-[2520px]
                       border-[1px] 
                    rounded-full 
                    py-2
                    shadow-sm
                    transition
                    cursor-pointer
                    hover:shadow-md
    '>
         <div className='flex flex-row items-center justify-between'>
          <div className='text-sm  
                          font-bold
                          px-6'>
            Anywhere
          </div>
          <div className='hidden md:block px-6 font-bold text-sm flex-1 border-x-[1px] text-center'>
           Anyweek 
          </div>   

          <div className='text-sm text-gray-600
          flex flex-row items-center gap-3 px-4'>
            <div className='hidden sm:block'>
                Add Guests
            </div>
            <div className='p-2 bg-rose-500  rounded-full text-white'>
                <BiSearch/>
            </div>
          </div>
         </div>

    </div>
  )
}

export default Searchbar