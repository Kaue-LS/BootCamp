import * as S from './styled'
import Van from '../../../Components/img/Van.jpg'
import Casa from '../../../Components/img/casa.png'
import Montagem from '../../../Components/img/Montagem.png'
import { useState } from 'react'

export default function Entrega(){
    const [option,setOption]=useState(1);
    const [banner,setBanner]=useState(0);

    const MoverBarra=(props)=>{
        
        if(props===1){
            setOption(props)
            document.getElementById('Barra').style=`
            margin:0 0 0 10%;
            transition:400ms;

            `
        }
        if(props===2){
            setOption(props)

            document.getElementById('Barra').style=`
            margin:0 00% 0 43%;
            transition:400ms;

            `
        }
        if(props===3){
            setOption(props)

            document.getElementById('Barra').style=`
            margin:0 0 0 77%;
            transition:400ms;
            `
        }
    }
    
    const AbrirBanner=(numero)=>{
        if(numero===1){
            setBanner(1)
        }
        if(numero===2){
            setBanner(2)
        }
        if(numero===3){
            setBanner(3)
        }
        else if(numero===0){
            setBanner(0)

        }
    }
// 0 0 0 -160%
// 0 170% 0 0
// 0 0 0 170%
    return(
        <>
        {
            banner===1?(
                <S.Container>
                <S.Banner>
                    <S.Text>Esta é a opção perfeita para quem quer receber a encomenda dos pneus, sem se preocupar em levar 
o veículo até um centro automotivo para a montagem. Nós montamos para você!
E o melhor, tudo isso no conforto da sua casa. Basta escolher e comprar seus pneus novos, contratar e 
agendar a data do serviço, e o resto é por nossa conta. Simples não é!? (Esta opção, momentaneamente, é 
exclusiva para os estados de Santa Catarina e São Paulo, se você não mora em nenhum destes estados, aguarde,
em breve teremos novidades!)</S.Text>
                    <S.Image src="https://static.pneustore.com.br/medias/sys_master/images/images/hef/ha7/9043275841566/Desk-Van.png"></S.Image>
                    <S.Fechar onClick={()=>AbrirBanner(0)}>Entendi</S.Fechar>
                </S.Banner>
            </S.Container>
            ):(
                null
            )
        }
         {
            banner===2?(
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
            banner===3?(
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
        <S.MetodoEntrega >
            <S.OptionsBarra>
            <S.OptionsArea>
                <S.Option1 onClick={()=>MoverBarra(1)} value={1}><img src={Van} alt=''></img></S.Option1>
                <S.Option2 onClick={()=>MoverBarra(2)}  value={2}><img src={Montagem} alt=''></img></S.Option2>
                <S.Option3 onClick={()=>MoverBarra(3)}  value={3}><img src={Casa} alt=''></img></S.Option3>
            </S.OptionsArea>
            <S.BarraArea id='Barra'>
            </S.BarraArea>
            <S.AreaOpçoes>
                {
                    option===1?(
                        <S.Opção1>
                              <S.MontagemMovel >
                <div className='header'>
                    <h3>Entregamos e montamos seu pneu!</h3>
                </div>
                <div className='body'>
                    <div>
                    <h3><img src={Van} alt=''/>Montagem Móvel</h3>
                    <input onClick={()=>setOption(1)} name='Entrega' type='radio'/>
                    </div>
                    <div>
                    <p>Agende sua entrega com a PneuStore Móvel</p>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <span>Confira as opções</span>
                    <span onClick={()=>AbrirBanner(1)}  className='SaibaMais'>Saiba Mais</span>
                    </div>
                    </div>
                </div>
                 </S.MontagemMovel>
                            </S.Opção1>
                    ):(
                        null
                    )
                }
                 {
                    option===2?(
                        <S.Opção2>
                            <S.CentroMontagem>
                <div className='header '>
                <img src={Montagem} alt=''/>
                    <h3>Entregar e montar em um Centro de Montagem</h3>
                </div>
                <div className='body'>
                    <div>
                    <h3>De 3 a 6 dias úteis</h3>
                    <input onClick={()=>setOption(2)} name='Entrega' type='radio'/>
                    </div>
                    <div>
                    <p>Confira a disponibilidade dos serviços em cada centro de montagem</p>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <h4>A partir de R$ 29,90</h4>
                    <span onClick={()=>AbrirBanner(2)} className='SaibaMais'>Saiba mais</span>
                    </div>
                    </div>
                </div>
                 </S.CentroMontagem>
                            </S.Opção2>
                    ):(
                        null
                    )
                }
                 {
                    option===3?(
                        <S.Opção3>
                             <S.EndereçoEntrega>
                 <div className='head'>
                        <img src={Casa} alt=''/>
                        <h3>Entregar no meu endereço</h3>
                    </div>
                <div className='body'>
                    <div>
                        <h3>Normal</h3>
                        <input onClick={()=>setOption(3)} name='Entrega' type='radio'/>
                    </div>
                    <div>
                        <h3>De 2 a 5 dias úteis</h3>
                        <div style={{display:'flex',flexDirection:'column'}}>
                        <p>R$29,90</p>
                        <span onClick={()=>AbrirBanner(3)} className='SaibaMais'>Saiba mais</span>
                            </div>                        
                    </div>
                </div>
                </S.EndereçoEntrega>
                            </S.Opção3>
                    ):(
                        null
                    )
                }
                </S.AreaOpçoes>

            </S.OptionsBarra>
        </S.MetodoEntrega>
        </>
    )
}