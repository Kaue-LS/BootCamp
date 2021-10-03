// import {  useState } from "react";
import Pneus from "./Pneu/Pneus";
import CartICon from '../../Components/img/cart.jpg'
import * as S from "./styled";
import NavBar from "../../Components/NavBar/NavBar";
import CepCupom from "./CupomCep/CepCupom";
import { Link } from "react-router-dom";
import {AnuncioP} from "../../Components/Anuncios/Anuncio";
export default function Carrinho() {
 
  return (
    <>
   
    <NavBar></NavBar>
      {/* Carrinho de compra */}
      <S.Header>
        <S.CartIcon
          src={CartICon}
          alt="Cart"
        />
        <h3>Meu Carrinho de compras</h3>
      </S.Header>



      <S.Itens>
        {/* Parte onde os pneus vao aparecer, eles estao no arquivo Pneu */}
          <Pneus></Pneus>        
      </S.Itens>

      
        {/* Area dos cupons */}
        {/* Area do resumo  e dos botoes*/}
        
        <S.CepCuponsResu>
       
      <S.CepCupomAnuncio>
      <CepCupom/>
      <AnuncioP/>
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
              <Link to='/login' style={{textDecoration:'none'}} >
              <S.Finalizar>
                <i className="im im-check-mark"></i>FINALIZAR COMPRA
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
    </>
  );
}
