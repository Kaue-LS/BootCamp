import * as S from './Styled'
import Van from '../../Components/img/Van.jpg'
import Montagem from '../../Components/img/Montagem.jpg'
import Casa from '../../Components/img/casa.jpg'
import Resumo from '../Resumo'
import { useState } from 'react'
export default function Opçoes(){
    const[showOptions,setShowOptions]=useState(false)
    return(
<>
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
            <span>Confira as opções</span>
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
            <h4>A partir de R$ 29,90</h4>
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
                <p>R$29,90</p>
                
            </div>
            </div>
            </S.EndereçoEntrega>
             </S.Opçoes>
            ):(

              <Resumo/>

            )
            }
            </>

    )
}