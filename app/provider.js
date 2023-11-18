'use client'
import { createContext, useContext, useState } from 'react';
export const Signcontext=createContext();
export const Providers=({children})=>{
    const [signisopen,setsignin]=useState(false);
    const [sinupisopen,setsignup]=useState(false);
    const values={
        setsignin,
        sinupisopen,
        signisopen,
        setsignup
    }
    return(
       <Signcontext.Provider value={values}>
        {children}
       </Signcontext.Provider>
    )
}
