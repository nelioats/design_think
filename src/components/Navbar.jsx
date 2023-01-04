import React, {useState} from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';

const NavBar = () => {

const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav)

      //caso a barra de rolagem fique ativa no navegador, nesse caso remover a rolagem p deixar somente o menu
      if(!nav){
        document.body.style.overflow = 'hidden'
      }else{
          document.body.style.overflow = 'scroll'
      }
}

  return (
    <div className='absolute bg-white/80 w-full flex justify-between p-4 items-center z-20'>
        <h1 className='text-green-700 font-bold text-2xl z-20'>DESIGN THINKING</h1>
        <HiMenuAlt3 onClick={handleNav} className=' text-green-800 cursor-pointer z-20' size={25} />
        <div className={
          nav ? 'ease-in duration-500 fixed text-green-900 left-0 top-0 w-full h-screen bg-white/90 py-7 flex-col z-10' : 
           'absolute top-0 h-screen ease-in duration-200 z-10 opacity-0'
        }> 
            <ul className='flex flex-col fixed w-full  h-full max-h-[550px]  justify-center'>
              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400'>Empatizar</li>
              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400'>Definir</li>
              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400'>Idear</li>
              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400'>Prototipar</li>
              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400'>Testar</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar