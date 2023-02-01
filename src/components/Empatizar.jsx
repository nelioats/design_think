import React from 'react'
import emapatizar01 from '../img/empatizar01.png'
import emapatizar02 from '../img/empatizar02.png'

const Empatizar = () => {
  return (
    <div name='empatizar' className='bg-[#FD9D24] p-5 mt-12 pb-20 drop-shadow-xl'>
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-5xl md:text-7xl text-white font-semibold border-b-8 border-white'>EMPATIZAR</h2>
              
              <div className=' pt-7 m-auto text-justify'>
                  <div className=''>
                      <p className='font-bold'>RESUMO:</p>
                      <p>A EMPATIA FORNECE O PONTO DE PARTIDA DECISIVO PARA O DESIGN THINKING. O PRIMEIRO ESTÁGIO DO PROCESSO É PARA <span className='text-black font-semibold'>CONHECER</span> E SE COLOCAR NO LUGAR DA <span className='text-black font-semibold'>PERSONA</span> (OU SEU CLIENTE), DA PESSOA QUE <span className='text-black font-semibold'>SENTE</span> AQUELA <span className='text-black font-semibold'>DOR</span>. ENTENDER SUAS NECESSIDADES E DESEJOS. ISSO SIGNIFICA <span className='text-black font-semibold'>OBSERVAR</span> E <span className='text-black font-semibold'>TER</span> CONTATO COM ESSAS PESSOAS PARA COMPREENDÊ-LAS.</p>
                      <p className='mt-3'>E, COMO ESTAMOS TRABALHANDO COM O TCC BASEADO NOS OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL - <span className='text-black font-semibold'>ODS</span>, IREMOS FAZER TODOS OS PROCESSOS DO DESIGN THINKING SOB ESSA PERSPECTIVA.</p>
                      <p className='font-bold mt-3'>ENTREGA (S):</p>
                      <ul>
                        <ol>LEVANTAMENTO COM DIVERSOS PROBLEMAS/DORES REAIS DA PERSONA (OU CLIENTE).</ol>
                        <ol>LEMBRE-SE DE PRIORIZAR O CONTATO COM PESSOAS QUE VIVENCIAM ESSE PROBLEMA/DOR.</ol>
                      </ul>
                  </div>
                <div className='pt-4 flex flex-col lg:flex-row h-auto md:space-x-10 font-medium'>
                    <div className='md:w-1/2 indent-10'>
                        <p className='pb-4 '>O nosso TCC usa como solução de problema uma abordagem chamada Design Thinking. O Design Thinking é “uma abordagem criativa e focada na resolução de problemas e no ser humano, propicia a descoberta de soluções novas e mais eficazes” (Brown, p. 7). Essa abordagem é divida em 5 etapas, conforme figura abaixo:</p>
                        <img src={emapatizar01} alt="" />
                        <p className='pt-4'>A primeira etapa é “empatizar”. Para Rocha (2018,p.162), o “empatizar” nasce da compreensão do problema em seu contexto social. “Na etapa da descoberta/empatia, o ponto principal consiste em compreender o universo no qual a temática do problema está imersa. O problema é investigado a partir do entendimento da realidade (...)” . Em outras palavras,  é necessário identificar as dores / os problemas que afligem nossa realidade. </p>
                    </div>
                    <div className='md:w-1/2 indent-10'>
                        <p>Para chegar aos problemas, podemos usar o Brainstorming como ajuda nesse processo.</p>
                        <p>Mas o que é Brainstorming? O brainstorming ou tempestade de ideias, mais que uma técnica de dinâmica de grupo, é uma atividade desenvolvida para explorar a potencialidade criativa de um indivíduo ou de um grupo - criatividade em equipe - colocando-a a serviço de objetivos pré-determinados.</p>
                        <div className='indent-0 m-[4%] p-[6%] border border-white'>
                          <p>Aqui, sua equipe irá fazer o levantamento de diversas ideias de problemas e depois partir para observar e confirmar se esse problema é uma dor real,ou não, com a persona que vivencia essa situação. </p>
                        </div>
                        <div>
                          <p className='font-bold'>Dicas:</p>
                          <ul>
                            <ol>1.	Ter empatia com o público-alvo que sofre com esse problema; </ol>
                            <ol>2.	Ouvir a equipe/ter ambiente colaborativo;</ol>
                            <ol>3.	Lembrar que terão de fazer um link com ODS para a realidade local (cidade/município).</ol>
                          </ul>
                          <img className='pt-2' src={emapatizar02} alt="" />
                        </div>
                    </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Empatizar