"use client"
import {React,useState} from 'react'
import { Modal } from './Modals'
import Input from '../input/input'
import Button from '../Button'
import {FcGoogle} from "react-icons/fc"
import Heading from '../Headinng'
import useRegisterhook from "@/app/hooks/useRegister";
function Registermodal() {
  const [isLoading, setIsLoading] = useState(false);
  const registermodel=useRegisterhook();
  
    const body=(
        <div className='flex flex-col gap-4'>
             <Heading
        title="Welcome to Airbnb"
        subtitle="Create an account!"
      
        
      />
            <Input
               type="email"
               label="Email"
            />
             <Input
               type="text"
               label="Name"
            />
             <Input
               type="password"
               label="Password"
            />

        </div>
    )
    const footer=(
        <div className='flex flex-col gap-4 mt-3 w-full'>
            <Button 
            outline
            label="Continue with Google"
            icon={FcGoogle}
            
            />
             <div 
           className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>Already have an account?
          <span 
           
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Log in</span>
        </p>
      </div>
        </div>
    )
  return (
    <Modal
    isOpen={registermodel.isOpen}
    onClose={registermodel.onClose}
    disabled={isLoading}
    body={body}
    footer={footer}
    label="Register"
    />
   
  )
}

export default Registermodal