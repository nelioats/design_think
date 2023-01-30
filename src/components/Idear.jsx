import React from 'react'

const Idear = () => {
  return (
    <div name='idear' className='bg-[#FCC30B] p-5 pb-16 drop-shadow-xl'>
      <div className='container mx-auto max-w-5xl'>
          <div className='pt-14 flex flex-col lg:flex-row h-auto md:space-x-6'>
              <div className='md:w-2/5 mb-4'>
                <h2 className='text-5xl md:text-7xl text-white font-semibold'>IDEAR</h2>
              </div>
              <div className='md:w-3/5 p-2 text-justify text-white'>
                <p>COM O CONHECIMENTO DE SUA PERSONA E UMA DEFINIÇÃO CLARA DO PROBLEMA EM MENTE, É HORA DE COMEÇAR A TRABALHAR EM <span className='text-black font-bold'>POTENCIAIS SOLUÇÕES</span>. A TERCEIRA FASE É ONDE A CRIATIVIDADE ACONTECE, E É FUNDAMENTAL QUE ESTA FASE DE IDEAÇÃO/IDEALIZAÇÃO SEJA UMA ZONA LIVRE DE JULGAMENTOS, OU SEJA, PODEM EXPLORAR DIVERSAS OPORTUNIDADES DE SOLUÇÃO.</p> 
                <p className='mt-3'>EXISTEM VÁRIAS TÉCNICAS QUE PODEM SER UTILIZADAS AQUI, MAS USAREMOS O <span className='text-black font-bold'>MAPA DA EMPATIA</span> E <span className='text-black font-bold'>MATRIZ CSD</span> PARA NOS AUXILIAR A DESENHAR A IDEIA DA <span className='text-black font-bold'>SOLUÇÃO PARA O PROBLEMA</span>. ALÉM, CLARO, DA PESQUISA PARA VALIDARMOS HIPÓTESES E SOLUÇÕES.</p>  
              </div>
          </div>
        </div>
    </div>
  )
}

export default Idear