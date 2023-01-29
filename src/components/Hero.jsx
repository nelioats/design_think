import React from 'react'
import { Link } from 'react-scroll'
// import logo from '../img/logo.png'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className='absolute top-0 left-0 w-full h-screen bg-black/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white text-center'>
          <div className='md:flex md:flex-col-2 md:w-full md:justify-center md:mt-20'>
              <div className='mt-20 md:text-left md:w-full md:pl-32'>
                {/* <img className='w-48 h-48 m-auto mb-4 md:hidden'  src={logo} alt="" /> */}
                  <p>A METODOLOGIA </p>
                  <h1 className='font-bold text-4xl drop-shadow-2xl md:text-7xl'>Design Thinking</h1>
                  <p className='drop-shadow-2xl py-2 mb-2 px-2 text-base md:text-xl'>e Formação de Professores na Orientação do TCC do IEMA</p>
              </div>
              <div className='px-3 space-y-2 md:w-full md:pr-20 md:max-w-lg md:mt-10'>
                <div> <Link to="empatizar" smooth={true} offset={10} duration={500}><button className='w-full hover:bg-[#FD9D24] hover:text-white transition duration-300 ease-out hover:ease-in'>EMPATIZAR</button></Link></div>
                <div> <Link to="definir" smooth={true} offset={10} duration={500}><button className='w-full hover:bg-[#FD6925] hover:text-white transition duration-300 ease-out hover:ease-in'>DEFINIR</button></Link></div>
                <div> <Link to="idear" smooth={true} offset={10} duration={500}><button className='w-full hover:bg-[#FCC30B] hover:text-white transition duration-300 ease-out hover:ease-in'>IDEAR</button></Link></div>
                <div> <Link to="prototipar" smooth={true} offset={10} duration={500}><button className='w-full hover:bg-[#A21942] hover:text-white transition duration-300 ease-out hover:ease-in'>PROTOTIPAR</button></Link></div>
                <div> <Link to="testar" smooth={true} offset={10} duration={500}><button className='w-full hover:bg-[#0A97D9] hover:text-white transition duration-300 ease-out hover:ease-in'>TESTAR</button></Link></div>
              </div>
            </div>
          <div className='w-full space-x-3 space-y-2 mt-2 pt-20'>
              <button className='bg-white text-green-700 font-semibold md:min-w-[300px]'>Saiba + sobre o IEMA</button>
              <button className='bg-white text-green-700 font-semibold md:min-w-[300px]'>Biblioteca TCC</button>
          </div>
      </div>
     
    </div>
  )
}

export default Hero