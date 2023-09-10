"use-client"
import useLoginModal from "@/app/hooks/useLofin";
import useRegisterhook  from "@/app/hooks/useRegister";
function Menuitem({label,onClick}) {
  const registerModal = useLoginModal()

  console.log(onClick,registerModal.isOpen)
  return (
    <div 
    onClick={onClick} 
    className='px-3 py-4 transiton font-bold hover:bg-neutral-200 '>
        {label}
        </div>
  )
}

export default Menuitem