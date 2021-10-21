import * as S from './styled'
import { NavBarTerciaria } from "../../Components/NavBar/NavBar"
import CustomizedSteppers from "../../Components/Stepper/Stepper"
import { useState } from 'react'
import BoxBlack from '../../Components/img/Box-Black.jpg'
import Van from '../../Components/img/Van.jpg'
import Montagem from '../../Components/img/Montagem.png'
import Casa from '../../Components/img/casa.png'
import Resumo from './Resumo'
import MenuMobile from '../../Components/MenuMobile/MenuMobile'
import { Link } from 'react-router-dom'

export default function Entrega(){

    const[showOptions,setShowOptions]=useState(false)
    const[option,setOption]= useState(0)
    const [OpEntrega,setOpEntrega]=useState('')

    const AbrirBanner=(numero)=>{
        if(numero===1){
            setOption(1)
            document.getElementById('Pagina').style=`background-color:Black;
            opacity:0.5;
            z-inde:999;`
            document.getElementById('Fundo').style=`background-color:Black;
            opacity:0.8;
            z-inde:999;`
        }
        if(numero===2){
            setOption(2)
            document.getElementById('Pagina').style=`background-color:Black;
            opacity:0.5;
            z-inde:999;`
            document.getElementById('Fundo').style=`background-color:Black;
            opacity:0.8;
            z-inde:999;`
        }
        if(numero===3){
            setOption(3)
            document.getElementById('Pagina').style=`background-color:Black;
            opacity:0.5;
            z-inde:999;`
            document.getElementById('Fundo').style=`background-color:Black;
            opacity:0.8;
            z-inde:999;`
        }
        else if(numero===0){
            setOption(0)
            document.getElementById('Pagina').style=`background:none;
            opacity:1;
            z-inde:999;`
            document.getElementById('Fundo').style=`background-color:none;
            opacity:1;
            z-inde:999;`

        }
    }


   
    
 
    return(
        <>
         <NavBarTerciaria></NavBarTerciaria>
        <CustomizedSteppers props={2}/>
        <S.ShowBanner>
      {
          option===1?(
            <S.Container>
                <S.Banner>
                    <S.Text>Se você mora nos estados de São Paulo e Santa Catarina, para sua comodidade a PneuStore oferece também o serviço de montagem PneuStore Móvel, onde você escolhe o pneu, e nós montamos em sua casa. Se você não mora em nenhum desses estados, aguarde, em breve a PneuStore terá novidades...</S.Text>
                    <S.Image src="https://static.pneustore.com.br/medias/sys_master/images/images/hef/ha7/9043275841566/Desk-Van.png"></S.Image>
                    <S.Fechar onClick={()=>AbrirBanner(0)}>Entendi</S.Fechar>
                </S.Banner>
            </S.Container>
          ):(
              null
          )
        }
         { option===2?(
            <S.Container>
            <S.Banner>
            <S.Text>Nesta opção você pode escolher o centro de montagem mais próximo da sua casa, e logo após escolher o local,
já pode agendar e fazer o pagamento por aqui mesmo. Se preferir, fazemos somente a entrega no local escolhido,
e o pagamento do SERVIÇO DE MONTAGEM, pode ser realizado diretamente no local do serviço, como você preferir.</S.Text>              
                <S.Fechar onClick={()=>AbrirBanner(0)}>Entendi</S.Fechar>
            </S.Banner>
        </S.Container>
        ):(
            null
        )
         }
        {
        option===3?(
            <S.Container>
            <S.Banner>
            <S.Text>Nesta opção você pode optar por receber os pneus no conforto do seu lar, e escolher onde e quando montar 
seus pneus, ou se apenas vai aproveitar aquela promoção imperdível, e guardar os pneus para trocar quando
for necessário. Aproveite, faça seu cadastro aqui na PneuStore, e receba as promoções que só a maior 
distribuidora de pneus do Brasil pode oferecer.</S.Text>
                <S.Fechar onClick={()=>AbrirBanner(0)}>Entendi</S.Fechar>
            </S.Banner>
        </S.Container>
        ):(
            null
        )
         
      }
        </S.ShowBanner>
        <div id='Fundo'>
        <S.Entrega id='Pagina'>
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
                <Link style={{textDecoration:'none'}}  to='/address'>
                <button>Alterar endereço</button>
                </Link>
            </div>
        </S.DadosEntrega>

        <S.OpçoesEntrega>
            <h3><img src={BoxBlack} alt=''/>Opções de entrega</h3>
            <button onClick={()=>setShowOptions(true)}>Selecionar opção</button>
        </S.OpçoesEntrega>
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
                    <input  value='Entregar e montar o pneu' onClick={(e)=>setOpEntrega(e.target.value)}  name='Entrega' type='radio'/>
                    </div>
                    <div>
                    <p>Agende sua entrega com a PneuStore Móvel</p>
                    <div style={{display:'flex',flexDirection:'column',textAlign:'right'}}>
                    <span>Confira as opções</span>
                    <span  onClick={()=>AbrirBanner(1)} className='SaibaMais'>Saiba Mais</span>
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
                    <input  value='Entragar e montar em um Centro de Montagem' onClick={(e)=>setOpEntrega(e.target.value)}   name='Entrega' type='radio'/>
                    </div>
                    <div>
                    <p>Confira a disponibilidade dos serviços em cada centro de montagem</p>
                    <div style={{display:'flex',flexDirection:'column',textAlign:'right'}}>
                    <h4>A partir de R$ 29,90</h4>
                    <span  onClick={()=>AbrirBanner(2)} className='SaibaMais'>Saiba mais</span>
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
                        <input value='Entregar no endereço' onClick={(e)=>setOpEntrega(e.target.value)} name='Entrega' type='radio'/>
                    </div>
                    <div>
                        <h3>De 2 a 5 dias úteis</h3>
                        <div style={{display:'flex',flexDirection:'column',textAlign:'right'}}>
                        <p>R$29,90</p>
                        <span  onClick={()=>AbrirBanner(3)} className='SaibaMais'>Saiba mais</span>
                            </div>                        
                    </div>
                </div>
                </S.EndereçoEntrega>
                {
                OpEntrega.length>2?(
                    <Link style={{textDecoration:'none'}} to='/payment'>
                    <S.Proximo>Próximo</S.Proximo>
                    </Link>
                ):(
                    null
                )
            }
                     </S.Opçoes>
            ):(

              <Resumo/>

            )
               }
  
        </S.Entrega>
        </div>
        <MenuMobile></MenuMobile>
        </>
    )
}