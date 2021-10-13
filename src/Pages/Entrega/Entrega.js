import * as S from './styled'
import { NavBarTerciaria } from "../../Components/NavBar/NavBar"
import CustomizedSteppers from "../../Components/Stepper/Stepper"
import { useState } from 'react'
import BoxBlack from '../../Components/img/Box-Black.jpg'
import Van from '../../Components/img/Van.jpg'
import Montagem from '../../Components/img/Montagem.jpg'
import Casa from '../../Components/img/casa.jpg'
import Resumo from './Resumo'

export default function Entrega(){

    const[showOptions,setShowOptions]=useState(false)
    // const[option1,setOption1]= useState(false)
    return(
        <>
         <NavBarTerciaria></NavBarTerciaria>
        <CustomizedSteppers props={2}/>
        <S.Entrega>
        <S.Dados>
        <S.DadosCliente>
            <h3>Dados do cliente</h3>
            <div>
                <div>
                <p>Nome:</p> <span>Fulano Ciclano</span>
                </div>
                <div>
                <p>Email:</p> <span>FulanodeTal@gmail.com</span>
                </div>
            </div>
        </S.DadosCliente>
        <S.DadosEntrega>
            <h3> Endereço de entrega</h3>
            <div>
                <div>
                <p><i className="im im-location"></i>Fulano</p>
                </div>
                <div>
                <span>Av. Engenheiro Luís Carlos Berrini</span>

                </div>
                <div>
                <span>São Paulo</span>
                <span>São Paulo</span>

                </div>
                <div>
                <span>Brazil 04571-010</span>

                </div>
            </div>
        </S.DadosEntrega>
        <button>Alterar endereço</button>

        <S.OpçoesEntrega>
            <h3><img src={BoxBlack} alt=''/>Opções de entrega</h3>
            <button onClick={()=>setShowOptions(true)}>Selecionar opção</button>
        </S.OpçoesEntrega>
        {/* {
            option1?(
                    null
            ):(
                null
            )
        } */}
          
        </S.Dados>
        
        {   showOptions?(
                <S.Opçoes>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <h2>Selecione a opção de entrega</h2>
                    <i onClick={()=>setShowOptions(false)} className="im im-x-mark-circle-o"></i>
                    </div>
                 <S.MontagemMovel >
                <div className='header'>
                    <h3>Entregamos e montamos seu pneu!</h3>
                </div>
                <div className='body'>
                    <div>
                    <h3><img src={Van} alt=''/>Montagem Móvel</h3>
                    <input type='radio'/>
                    </div>
                    <div>
                    <p>Agende sua entrega com a PneuStore Móvel</p>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <span>Confira as opções</span>
                    <span>Saiba Mais</span>
                    </div>
                    </div>
                </div>
                 </S.MontagemMovel>
                 <S.CentroMontagem>
                <div className='header '>
                <img src={Montagem} alt=''/>
                    <h3>Entregar e montar em um Centro de Montagem</h3>
                </div>
                <div className='body'>
                    <div>
                    <h3>De 3 a 6 dias úteis</h3>
                    <input type='radio'/>
                    </div>
                    <div>
                    <p>Confira a disponibilidade dos serviços em cada centro de montagem</p>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <h4>A partir de R$ 29,90</h4>
                    <span>Saiba mais</span>
                    </div>
                    </div>
                </div>
                 </S.CentroMontagem>
                 <S.EndereçoEntrega>
                 <div className='head'>
                        <img src={Casa} alt=''/>
                        <h3>Entregar no meu endereço</h3>
                    </div>
                <div className='body'>
                    <div>
                        <h3>Normal</h3>
                        <input type='radio'/>
                    </div>
                    <div>
                        <h3>De 2 a 5 dias úteis</h3>
                        <div style={{display:'flex',flexDirection:'column'}}>
                        <p>R$29,90</p>
                        <span>Saiba mais</span>
                            </div>                        
                    </div>
                </div>
                </S.EndereçoEntrega>
                     </S.Opçoes>
            ):(

              <Resumo/>

            )
            }
        </S.Entrega>
        </>
    )
}