// import { useEffect, useState } from "react";
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
        <S.CartIcon src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAMAAACnDzTfAAAAAXNSR0IB2cksfwAAAFFQTFRFAAAA/////////////////////////////////////////////////////////////////////////////////////////////
        ///////////CDfnXgAAABt0Uk5TABBPMJ//IL/woICQQD9vf6/P31Dv0MBgcOCwTTIjOgAAAKVJREFUeJzN0ssSgyAMBdAgBgxiaQukj///0GpFsSqse1eZOTMJEAAKEU1JZIsoT0Vp7OicwGAvSh0N2uIx2hNTw8VdNY7ZmByc0zfMSUb6jofMZo/wl6YqBl3FfMVAmX
        2ovIfajkbLq5XDT5oQF7Fhf5K4/BUVoick+w123iCtDe00OHKqPQDzxh4gAqVHegK8skHEcfNpwnuqfTZBzMt9RM+80gfBVQwAVROYIwAAAABJRU5ErkJggg==' alt='Cart'/>
        <h3>Meu Carrinho de compras</h3>
    </S.Header>
    <S.ItemResu>
    {/* Pneu escolhido */}
    <S.ItemArea>
      
        {/* Imagem */}
        <S.Pneu alt='pneu'src='https://static.pneustore.com.br/medias/sys_master/images/images/h83/h14/8859585609758/pneu-firestone-aro-16-destination-a-t-225-70r16-102-99s-1.jpg'/>
        
        {/* Descrição do penu */}
        <S.Description>
            <S.itemInfo>
            <S.InfoIcon>
            <S.Info>Pneu Firestone Aro 16 Destination A/T 225/70R16 102/99S</S.Info>
            <i className="im im-trash-can"></i>
            </S.InfoIcon>
            <S.CodeBrand>
            <S.Brand  src="https://cdn.worldvectorlogo.com/logos/firestone-logo.svg" alt="FIRESTONE"/>
            <S.Code>ID:10100132</S.Code>
            </S.CodeBrand>
            </S.itemInfo>

            {/* Area da quantidade e preço */}
              <S.QuantPreço>
                <S.QuantArea>
                  <S.Label>Quantidade</S.Label>
                  <S.Quant>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                    <option >6</option>

                  </S.Quant>
                  
                </S.QuantArea>
                <S.PreçoArea>
                  <S.Label>Preço Total:</S.Label>
                  <S.Preço>R$  1.123,90</S.Preço>
                  </S.PreçoArea>
              </S.QuantPreço>
        </S.Description>
    </S.ItemArea>

    {/* Area do resumo */}
      {/* <S.resumoArea>
        <S.TitleItem>
        <h1>Resumo do pedido</h1>
        <p><span>1</span> itens no seu carrinho</p>
        </S.TitleItem>
        <img alt='bag-icon' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-bag-check-2992557-2486732.png'/>
        </S.resumoArea>  */}
        </S.ItemResu>   
    </>
  );
}
