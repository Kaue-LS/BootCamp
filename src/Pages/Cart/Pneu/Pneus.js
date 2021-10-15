import * as S from './styled'
import { useState } from 'react'
export default function Pneus(pneu){
  console.log(pneu)
  const [quant,setQuant] =useState(1)
  const [preço,setPreço] =useState(450.00)
  
    const Plus=(props)=>{
      if(quant<6){
      setQuant(quant+props)
      setPreço(preço+450.00)

      }
    }
    const Less=(props)=>{
      if(quant>1){
      setQuant(quant-props)
      setPreço(preço-450.00)
      }
    }


    const VerificarPreço=(props)=>{
      return props.replace('.',',')

    }
    return(
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
                  Pneu Firestone Aro 16 Destination A/T 225/70R16 102/99S
                </S.Info>
                <i className="im im-trash-can"></i>
              </S.InfoArea>


              <S.QuantPreço>
              <S.QuantArea>
                <S.Label>Quantidade</S.Label>
                <S.Quant>
                 <S.IconLess onClick={()=>Less(1)}>-</S.IconLess>
                 <span>{quant}</span>
                 <S.IconPlus onClick={()=>Plus(1)}>+</S.IconPlus>
               </S.Quant>
              </S.QuantArea>
              <S.PreçoArea>
                <S.Label>Preço Total:</S.Label>
                <S.Preço value={preço} onChange={(props)=>VerificarPreço(props.target.value)} >R${preço.toFixed(2)}</S.Preço>
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

            {/* Area da quantidade e preço */}
            
          </S.Description>
        </S.ItemArea>
             {/* Pneu escolhido */}
       
        
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
                  Pneu Firestone Aro 16 Destination A/T 225/70R16 102/99S
                </S.Info>
                <i className="im im-trash-can"></i>
              </S.InfoArea>


              <S.QuantPreço>
              <S.QuantArea>
                <S.Label>Quantidade</S.Label>
                <S.Quant>
                 <S.IconLess onClick={()=>Less(1)}>-</S.IconLess>
                 <span>{quant}</span>
                 <S.IconPlus onClick={()=>Plus(1)}>+</S.IconPlus>
               </S.Quant>
              </S.QuantArea>
              <S.PreçoArea>
                <S.Label>Preço Total:</S.Label>
                <S.Preço  value={preço}onChange={(props)=>VerificarPreço(props.target.value)} >R${preço.toFixed(2)}</S.Preço>
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

            {/* Area da quantidade e preço */}
            
          </S.Description>
        </S.ItemArea>
             {/* Pneu escolhido */}
       
        
          </>

    )
}