import './globals.css'
import { Nunito } from 'next/font/google'
import {Navbar} from "./Components/navbar/Navbar.jsx"
import Registermodal from './Components/modals/Registermodal'
import Loginmodel from './Components/modals/Loginmodel'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb-clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <Registermodal/>
      <Loginmodel/>
     
    
        {children}
        
        </body>
     </html>
  )
}
