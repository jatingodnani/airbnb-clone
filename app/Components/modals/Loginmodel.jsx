"use client"
import useLoginModal from "@/app/hooks/useLofin"
import Button from "../Button"
import Heading from "../Headinng"
import Input from "../input/input"
import { Modal } from "./Modals"
import {FcGoogle} from "react-icons/fc"

function Loginmodel({name}) {
  const loginmodal=useLoginModal();
  console.log(loginmodal.isOpen)
    const body=(
        <div className='flex flex-col gap-4'>
             <Heading
        title="Welcome to Airbnb"
        subtitle={name}
    />
             <Input
               type="email"
               label="Email"
            />
            
             <Input
               type="password"
               label="Password"
            />

        </div>
    )
    const footer=(
        <div className='flex flex-col gap-4 mt-3 w-full'>
            <hr/>
            <Button 
            outline
            label="Continue with Google"
            icon={FcGoogle}
            
            />
              <div className="
      text-neutral-500 text-center mt-4 font-light">
        <p>First time using Airbnb?
          <span 
           
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Create an account</span>
        </p>
      </div>
        </div>
    )
  return (
    <Modal
    isOpen={loginmodal.isOpen}
    onClose={loginmodal.onClose}
    body={body}
    footer={footer}
    label="Register"
    />
  )
}

export default Loginmodel