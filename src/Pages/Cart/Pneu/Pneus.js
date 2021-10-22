import { useState } from 'react'
import * as S from './styled'
import { Api } from '../../../Api/Api'
import { useHistory } from 'react-router'
export default function Pneus(pneu){
    const [quant,setQuant]=useState(0)
console.log(pneu)
  const history=useHistory()
  const RemovePneu= async()=>{
    await Api.buildApiDeleteRequest(Api.DeleteProduct())
    history.go(0)
  }  

    
  
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
    return(
        <>
        <S.ItemArea>
        
      
        <S.Pneu
        alt="pneu"
        src={pneu.imagePath}
      />

      <S.Description>
        <S.itemInfo>
          <S.InfoArea>
            <S.Info>
              {pneu.productName}
            </S.Info>
            <i onClick={()=>RemovePneu()} className="im im-trash-can"></i>
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
                {pneu.unitPrice}
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

      </>
    )
}