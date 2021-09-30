import * as S from './styled'
import { useState } from 'react'
export default function Pneus(){
  const [Quant,setQuant] =useState(1)

    const Plus=(props)=>{
      if(Quant<6){
      setQuant(Quant+props)
      }
    }
    const Less=(props)=>{
      if(Quant>1){
      setQuant(Quant-props)
      }
    }
    return(
      <>
        {/* Pneu escolhido */}
        <S.ItemArea>
        <S.NumberItem>
        <span>1</span>
        </S.NumberItem>
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
                  Pneu Firestone Aro 16 Destination A/T 225/70R16 102/99S
                </S.Info>

              </S.InfoArea>
              <S.CodeBrand>
                <S.Brand
                  src="https://cdn.worldvectorlogo.com/logos/firestone-logo.svg"
                  alt="FIRESTONE"
                />
                <S.Code>ID:10100132</S.Code>
              </S.CodeBrand>
            </S.itemInfo>

            {/* Area da quantidade e preço */}
            <S.QuantPreço>
              <S.QuantArea>
                <S.Label>Quantidade</S.Label>
                <S.Quant>
                 <S.IconLess onClick={()=>Less(1)}>-</S.IconLess>
                 <span>{Quant}</span>
                 <S.IconPlus onClick={()=>Plus(1)}>+</S.IconPlus>
               </S.Quant>
              </S.QuantArea>
              <S.PreçoArea>
                <S.Label>Preço Total:</S.Label>
                <S.Preço>R$ 1.123,90</S.Preço>
              </S.PreçoArea>
            </S.QuantPreço>
          </S.Description>
          <S.IconTrash>
          <i className="im im-trash-can"></i>
          </S.IconTrash>
        </S.ItemArea>
             {/* Pneu escolhido */}
       
        
        
          </>

    )
}