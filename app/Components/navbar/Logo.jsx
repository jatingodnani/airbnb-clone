"use-client"
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/images/logo.png"
const Logo = () => {
  return (
       <Image
       alt='logo' 
       className='hidden md:block cursor-pointer'
       width="90"
       height="90"
       src={logo}/>
  )
}

export default Logo