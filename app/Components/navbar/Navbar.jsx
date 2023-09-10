import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import Usermenu from './Usermenu'
export function Navbar() {
  return (
    <div className='fixed w-full bg-white z-8 shadow-sm border-b-[1px]'>
        <div className='py-4
                        px-8
                        mx-auto
                        flex
                        flex-row
                        item-center
                        gap-3
                        justify-between
        '>
          <Logo/>
           <Searchbar/>
           <Usermenu/>
            </div>
        </div>
    
  )
}

