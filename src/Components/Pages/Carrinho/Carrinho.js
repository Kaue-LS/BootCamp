// import { useEffect, useState } from "react";
import Pneus from "./Pneus";
import * as S from "./styled";
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
      {/* Carrinho de compra */}
      <S.Header>
        <S.CartIcon
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAMAAACnDzTfAAAAAXNSR0IB2cksfwAAAFFQTFRFAAAA/////////////////////////////////////////////////////////////////////////////////////////////
        ///////////CDfnXgAAABt0Uk5TABBPMJ//IL/woICQQD9vf6/P31Dv0MBgcOCwTTIjOgAAAKVJREFUeJzN0ssSgyAMBdAgBgxiaQukj///0GpFsSqse1eZOTMJEAAKEU1JZIsoT0Vp7OicwGAvSh0N2uIx2hNTw8VdNY7ZmByc0zfMSUb6jofMZo/wl6YqBl3FfMVAmX
        2ovIfajkbLq5XDT5oQF7Fhf5K4/BUVoick+w123iCtDe00OHKqPQDzxh4gAqVHegK8skHEcfNpwnuqfTZBzMt9RM+80gfBVQwAVROYIwAAAABJRU5ErkJggg=="
          alt="Cart"
        />
        <h3>Meu Carrinho de compras</h3>
      </S.Header>
      <S.ItemResu>
        {/* Parte onde os pneus vao aparecer, eles estao no arquivo Pneu */}
        <S.Items>
          <Pneus></Pneus>

          <S.CuponsArea>
            <S.TitleCupons>
            <i className="im im-tags"></i>Cupons de desconto:
            </S.TitleCupons>
            <S.Cupons></S.Cupons>
            <S.CuponsButton>APLICAR</S.CuponsButton>
          </S.CuponsArea>
        </S.Items>
        {/* Area dos cupons */}
    
        {/* Area do resumo  e dos botoes*/}
        <S.ResuButtons>
          <S.CepArea>
            <S.Title>
              <S.TitleCep>
                <img
                  src="https://static.pneustore.com.br/_ui/responsive/common/images/icon-target.svg"
                  alt="Cep"
                />{" "}
                Informe o seu CEP:
              </S.TitleCep>
            </S.Title>
            <S.Cep></S.Cep>
            <S.CepButton>CALCULAR ENTREGA</S.CepButton>
          </S.CepArea>
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
              Esvaziar Lixeira
            </S.Limpar>
          </S.ButtonsArea>
        </S.ResuButtons>
      </S.ItemResu>
    </>
  );
}
