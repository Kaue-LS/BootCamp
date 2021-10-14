import * as S from './styled'
import { Link } from 'react-router-dom'
import CepCupom from '../CupomCep/CepCupom'
// import { useState } from 'react'
export default function Resumo(props){
    console.log(props.props)
  // const [quant,setQuant]=useState(props.props)
    return(
        <>
        { props.props>0?(
        <S.CepCuponsResu>
       
        <S.CepCupomAnuncio>
        <CepCupom/>
        </S.CepCupomAnuncio>
  
          <S.ResuButtons>
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
                  <S.Title2>Subtotal</S.Title2>
                  <S.Subtotal>R$ 850,96</S.Subtotal>
                </S.Title2Subtotal>
              </S.Resumo>
  
              {/* Area onde mostra o total */}
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
  
            {/* Colocando os botoes abaixo do resumo */}
            <S.ButtonsArea>
              <S.ContFinal>
                <S.Continuar>CONTINUAR COMPRANDO</S.Continuar>
                <Link to='/checkout' style={{textDecoration:'none'}} >
                <S.Finalizar>
                  <i className="im im-check-mark"></i>PROSSEGUIR
                </S.Finalizar>
                </Link>
              </S.ContFinal>
              <S.Limpar>
                <i className="im im-shopping-cart"></i>
                Esvaziar Carrinho
              </S.Limpar>
            </S.ButtonsArea>
            </S.ResuButtons>
             </S.CepCuponsResu>
             ):(
               <S.CepCuponsResu>
                   <Link style={{margin:'1rem auto'}} to= '/'>
                     <S.Continuar style={{margin:'1rem auto',width:'50vw',fontSize:'1.5rem',backgroundColor:'#8aab04',border:'none',color:'#ffffff'}}>Continuar Comprando</S.Continuar>
                     </Link>
                     </S.CepCuponsResu>
             )
}
             </>
    )
}