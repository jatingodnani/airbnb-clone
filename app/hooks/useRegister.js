import { create } from "zustand";
const useRegisterhook=create((set)=>({
  isOpen:false,
  onOpen:()=>set({isOpen:true}),
  onClose:()=>set({isOpen:false}),
}));

export default useRegisterhook;