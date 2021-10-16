import * as S from "./styled";
import { useEffect, useState } from "react";
import { ApiGet } from "../../../Components/Api/Api";
export default function Pneus(pneu) {
  let id =pneu.pneu
  const [quant, setQuant] = useState(1);
  const [pneuinfo, setPneu] = useState([]);
  // const [preco, setPreco] = useState(pneuinfo.unitPrice);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      ObterPneu();
    }
  });
  // console.log(preco)
  const ObterPneu = async() => {
    await ApiGet.get(`/Produto/${id}`)
    .then((res) => {
      const info = res.data;
      setPneu(info.results);
      setLoading(false);
    });
  };

  console.log(pneuinfo)

  const Plus = (props) => {
    if (quant < 6) {
      setQuant(quant + props);
      // setPreco(preco + 450.0);
    }
  };
  const Less = (props) => {
    if (quant > 1) {
      setQuant(quant - props);
      // setPreco(preco - 450.0);
    }
  };

  const VerificarPreço = (props) => {
    return props.replace(".", ",");
  };
  return (
    <>
      {/* Pneu escolhido */}
      <S.ItemArea>
        {/* Imagem */}
        <S.Pneu
          alt="pneu"
          src="https://static.pneustore.com.br/medias/sys_master/images/images/h83/h14/8859585609758/pneu-firestone-aro-16-destination-a-t-225-70r16-102-99s-1.jpg"
        />

        {/* Descrição do penu */}
        <S.Description>
          <S.itemInfo>
            <S.InfoArea>
              <S.Info>
                {pneuinfo.description}
              </S.Info>
              <i className="im im-trash-can"></i>
            </S.InfoArea>

            <S.QuantPreço>
              <S.QuantArea>
                <S.Label>Quantidade</S.Label>
                <S.Quant>
                  <S.IconLess onClick={() => Less(1)}>-</S.IconLess>
                  <span>{quant}</span>
                  <S.IconPlus onClick={() => Plus(1)}>+</S.IconPlus>
                </S.Quant>
              </S.QuantArea>
              <S.PreçoArea>
                <S.Label>Preço Total:</S.Label>
                <S.Preço
                  onChange={(props) => VerificarPreço(props.target.value)}
                >
                  {(pneuinfo.unitPrice)}
                </S.Preço>
              </S.PreçoArea>
            </S.QuantPreço>

            <S.CodeBrand>
              <S.Brand
                src="https://cdn.worldvectorlogo.com/logos/firestone-logo.svg"
                alt="FIRESTONE"
              />
              <S.Code>ID:10100132</S.Code>
            </S.CodeBrand>
          </S.itemInfo>

          {/* Area da quantidade e preco */}
        </S.Description>
      </S.ItemArea>
      {/* Pneu escolhido */}

   
    </>
  );
}
