import React, {useState} from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-scroll'



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

      const handleClose = () => {
        setNav(!nav)
        document.body.style.overflow = 'scroll'
      }

      const handleNavLogo = () => {
        if(nav === true){
          setNav(!nav)
          document.body.style.overflow = 'scroll'
        }
      }

  return (
    <div className='fixed bg-white/90 w-full flex justify-between p-4 items-center z-20 top-0 left-0 right-0 '>
         <Link to='hero' smooth={true} offset={0} duration={500} className='z-20' onClick={handleNavLogo}><button className='text-green-700 font-bold text-2xl'>DESIGN THINKING</button></Link>
        <HiMenuAlt3 onClick={handleNav} className=' text-green-800 cursor-pointer z-20' size={25} />
        <div className={
          nav ? 'ease-in duration-75 fixed text-green-900 left-0 top-0 w-full h-screen bg-white/90 py-7 flex-col z-10' : 
           'absolute top-0 h-screen top-[-900%] ease-in duration-75 z-10'
        }> 

{/* <div className={
          nav ? 'ease-in duration-500 fixed text-green-900 left-0 top-0 w-full h-screen bg-white/90 py-7 flex-col z-10' : 
           'absolute top-0 h-screen    ease-in duration-200 z-10 opacity-0'
        }>  */}
            <ul className='flex flex-col fixed w-full  h-full max-h-[550px]  justify-center'>

              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400 cursor-pointer'> <Link onClick={handleClose} to="empatizar" smooth={true} offset={0} duration={500}>Empatizar</Link></li>
              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400 cursor-pointer'> <Link onClick={handleClose} to="definir" smooth={true} offset={0} duration={500}>Definir</Link></li>
              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400 cursor-pointer'> <Link onClick={handleClose} to="idear" smooth={true} offset={0} duration={500}>Idear</Link></li>
              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400 cursor-pointer'> <Link onClick={handleClose} to="prototipar" smooth={true} offset={0} duration={500}>Prototipar</Link></li>
              <li className='font-bold text-xl p-6 w-full border-b-2 border-gray-400 cursor-pointer'> <Link onClick={handleClose} to="testar" smooth={true} offset={0} duration={500}>Testar</Link></li>
            </ul>
        </div>
    </div>
  )
}
//teste
export default NavBar