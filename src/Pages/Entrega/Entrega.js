import * as S from './styled'
import { NavBarTerciaria } from "../../Components/NavBar/NavBar"
import CustomizedSteppers from "../../Components/Stepper/Stepper"
import { useState } from 'react'
import BoxBlack from '../../Components/img/Box-Black.jpg'
import Van from '../../Components/img/Van.jpg'
export default function Entrega(){

    const[showOptions,setShowOptions]=useState(false)
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
                <p><i class="im im-location"></i>Fulano</p>
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
          
        </S.Dados>
        
        {   showOptions?(
                <S.Opçoes>
                    <h2>Selecione a opção de entrega</h2>
                 <S.MontagemMovel>
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
     
                 </S.CentroMontagem>
                 <S.EndereçoEntrega>
                     </S.EndereçoEntrega>
                     </S.Opçoes>
            ):(

                <S.ResuItens>
                    <S.Item>

                    </S.Item>
                <S.resumoArea>
                <S.Resumo>
                  <S.TitleIconArea>
                    <S.TitleItem>
                      <S.Title>Resumo do pedido</S.Title>
                      <S.SubTitle>
                        <span>1</span> itens no seu carrinho
                      </S.SubTitle>
                    </S.TitleItem>
                    <S.IconBag
                      alt="bag-icon"
                      src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-bag-check-2992557-2486732.png"
                    />
                  </S.TitleIconArea>
                  <S.Title2Subtotal>
                      <div>
                    <S.Title2>Subtotal</S.Title2>
                    <S.Subtotal>R$ 850,96</S.Subtotal>
                    </div>
                    <div>
                    <S.Title2>Frete</S.Title2>
                    <S.Subtotal>R$ 850,96</S.Subtotal>
                    </div>
                  </S.Title2Subtotal>
                </S.Resumo>
                <S.Title3total>
              <S.Title3>Total</S.Title3>
              <S.TotalsubTotal>
                <S.PreçoTotal>R$ 850,96</S.PreçoTotal>
                <S.SubPreçoTotal>
                  ou <b>R$ 765,86 à vista</b> no{" "}
                  <b>cartão de débito ou via PIX</b>
                </S.SubPreçoTotal>
              </S.TotalsubTotal>
            </S.Title3total>
          </S.resumoArea>
          </S.ResuItens>

            )
            }
        </S.Entrega>
        </>
    )
}