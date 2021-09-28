// import { useEffect, useState } from "react";
import Pneus from "./Pneus";
import Cep from '../../Components/img/cep.jpg'
import Cupom from '../../Components/img/cupon.jpg'
import CartICon from '../../Components/img/cart.jpg'
// import { Anuncio } from "../../Components/Anuncios/Anuncio";
import * as S from "./styled";
import NavBar from "../../Components/NavBar/NavBar";
export default function Carrinho() {
  // const [cep, setCep] = useState([]);
  // const numCep = Number;
  // const buscaCep = () => {
  //   fetch(`http://viacep.com.br/ws/03542040/json/ `)
  //     .then((res) => res.json())
  //     .then((rescep) => {
  //       setCep(rescep);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   buscaCep();
  // });
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
        <S.Items>
          <Pneus></Pneus>        
        </S.Items>
      </S.Itens>

      
        {/* Area dos cupons */}
        {/* Area do resumo  e dos botoes*/}
        
        <S.CepCuponsResu>
       
          <S.CuponsCep>
            <S.CupomArea>
            <S.CuponsTitle><img src={Cupom} alt='cupom'/>Cupom de desconto</S.CuponsTitle>
            <i class="im im-angle-up"></i>
            </S.CupomArea>
            <S.CepArea>
            <S.CepTitle><img src={Cep} alt='cep'/>Informe seu CEP</S.CepTitle>
            <i class="im im-angle-up"></i>
            </S.CepArea>
          </S.CuponsCep>


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
              <S.Finalizar>
                <i className="im im-check-mark"></i>FINALIZAR COMPRA
              </S.Finalizar>
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
