import React from 'react'
import idear01 from '../img/idear01.png'
import idear02 from '../img/idear02.png'

const Idear = () => {
  return (
    <div name='idear' className='p-5 pb-16 drop-shadow-xl bg-[#FCC30B]'>

        <div className='container  mx-auto max-w-6xl'>
        <h2 className='text-5xl md:text-7xl text-white font-semibold border-b-8 border-white'>IDEAR</h2>
              
              <div className=' pt-7 m-auto text-justify text-black'>
                  <div>
                      <p className='font-bold'>RESUMO:</p>
                      <p>COM O CONHECIMENTO DE SUA PERSONA E UMA DEFINIÇÃO CLARA DO PROBLEMA EM MENTE, É HORA DE COMEÇAR A TRABALHAR EM <span className='text-black font-semibold'>POTENCIAIS SOLUÇÕES</span>. A TERCEIRA FASE É ONDE A CRIATIVIDADE ACONTECE, E É FUNDAMENTAL QUE ESTA FASE DE IDEAÇÃO/IDEALIZAÇÃO SEJA UMA ZONA LIVRE DE JULGAMENTOS, OU SEJA, PODEM EXPLORAR DIVERSAS OPORTUNIDADES DE SOLUÇÃO.</p> 
                      <p className='mt-3'>EXISTEM VÁRIAS TÉCNICAS QUE PODEM SER UTILIZADAS AQUI, MAS USAREMOS O <span className=' font-semibold'>MAPA DA EMPATIA</span> E <span className='text-black font-semibold'>MATRIZ CSD</span> PARA NOS AUXILIAR A DESENHAR A IDEIA DA <span className=' font-semibold'>SOLUÇÃO PARA O PROBLEMA</span>. ALÉM, CLARO, DA PESQUISA PARA VALIDARMOS HIPÓTESES E SOLUÇÕES.</p>
                      <p className='font-bold mt-3'>ENTREGA (S):</p>
                        <ul>
                          <ol>1. MAPA DA EMPATIA</ol>
                          <ol>2. MATRIZ CSD</ol>
                          <ol>3. PESQUISA</ol>
                        </ul>

                      <div className='pt-2 font-medium'>
                        <p>O <span className='text-black font-bold'>Mapa da Empatia</span> é uma ferramenta visual que analisa e descreve, por meio de um diagrama, aspectos comportamentais e o contexto de vida do cliente ideal de um negócio. Com esse recurso, é possível desenhar o cenário, os pensamentos, as ações, os problemas e as necessidades do seu público-alvo. O protagonista do Mapa é um só: sempre o <span className='text-black font-bold'>cliente.</span> Podem ser usuários de aplicativos e consumidores de serviços. Ou seja, é qualquer um que seja atendido pela solução de vocês.</p>
                        <p className='pt-3'>*** Nesse estágio do <span className='text-black font-bold'>IDEAR</span>, sua equipe irá fazer o <span className='text-black font-bold'>Mapa da Empatia</span>, a <span className='text-black font-bold'>Matriz CSD</span> e o questionário para aplicar a <span className='text-black font-bold'>Pesquisa</span>. *** </p>
                        
                        <div class="md:flex md:flex-row pt-3 items-center md:h-screen space-x-2 space-y-2">
                          <div className='basis-3/4'>
                            <img src={idear01} alt="" />
                          </div>
                          <div className='basis-1/4 text-center border-2 border-white'>
                            <p className='p-4'>O Mapa da Empatia é formado por 6 quadrantes que terão como foco o seu cliente, a pessoa que precisa da solução da empresa de vocês.</p>
                          </div>   
                        </div>
                      </div>
                  </div>
                <div className='pt-4 flex flex-col lg:flex-row h-auto md:space-x-10 font-medium'>
                    <div className='md:w-1/2 indent-8'>
                        <p className='pb-4 '>•	E o que é a Matriz CSD? A Matriz de Certezas, Suposições e Dúvidas — também conhecida carinhosamente como Matriz CSD — é um framework que busca conectar pontos, organizar informações e, principalmente, dar um norte para um barco à deriva.</p>
                        
                        <p className='pt-3'>A Matriz CSD é muito útil para dar o pontapé inicial em projetos, mas também é uma ferramenta importante para acelerar o processo de discovery/descoberta. </p>
                        <p className='pt-4 pb-2'>Pode ser utilizado o modelo abaixo:</p>
                        <img src={idear02} alt="" />
                        <p className='pt-4 pb-2'>Feita a Matriz CSD, você poderá montar o questionário da Pesquisa. E é de extrema importância conter, nesse questionário, as Suposições e Dúvidas que a equipe precisa conhecer.</p>
                    </div>
                    <div className='md:w-1/2 indent-0'>
                        <p className='font-semibold pb-2'>Algumas dicas na hora de montar o questionário:</p>
                        <ul>
                            <ol>1.	Identifique o que você deseja cobrir na pesquisa.</ol>
                            <ol>2.	A clareza no assunto tem maior importância, pois é o primeiro passo na elaboração da pesquisa.</ol>
                            <ol>3.	Escolha as palavras corretas: É essencial que as palavras ou frases que você usa, ao criar o questionário, sejam fáceis de entender.</ol>
                            <ol>4.	Faça apenas uma pergunta por vez.</ol>
                            <ol>5.	Seja flexível com suas opções: Às vezes, o entrevistado não deseja necessariamente escolher entre as opções de resposta que foram fornecidas pelo criador da pesquisa. Em uma situação assim, é interessante ter o tópico “outra” opção.</ol>
                            <ol>6.	Perguntas abertas ou fechadas? Considere a finalidade e dê as opções mais adequadas de resposta.</ol>
                            <ol>7.	É importante conhecer o seu público para fazer um questionário: Por exemplo, se o público estudado fala a língua espanhola, o envio das pesquisas precisa ser feito no idioma adequado.</ol>
                            <ol>8.	Escolha bem a ferramenta: Uma opção gratuita e muito utilizada é o Google Forms, ou apenas Formulário do Google.</ol>

                        </ul>

                        <p className='pt-3 font-semibold'>Vamos voltar ao exemplo da nossa amiga Larissa Fernandes? Então, a equipe que está buscando uma solução para o problema da Larissa fez o seguinte: </p>
                        <ul className='pt-2'>
                          <li>•	Construiu o Mapa de Empatia, ou seja, buscou saber: O que Larissa vê? O que Larissa ouve? O que Larissa fala? Quais são as dores de Larissa Fernandes? Quais são suas necessidades?</li>
                          <li>•	Produziu a Matriz CSD;</li>
                          <li>•	Depois, elaborou e aplicou um questionário na comunidade que sofria com o odor de resíduo animal.</li>
                        </ul>
                        <p className='pt-2'>Após análise do Mapa de Empatia, Matriz CSD e Resultado e <span className='italic'> brainstorming sobre a melhor solução para o problema, chegou-se à seguinte solução: “Criar um biodigestor de baixo custo para reduzir poluição de resíduo animal na natureza, no município de Coroatá, e, assim, diminuir o impacto na vida da comunidade”</span>. Se, porventura, essa ideia for aceita pela comunidade, avança-se para a fase seguinte. Caso contrário, busca-se uma nova ideia. </p>
                    </div>
              </div>
            </div>
      </div>



    </div>
  )
}

export default Idear