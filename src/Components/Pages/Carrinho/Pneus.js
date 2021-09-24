import * as S from './styled'
export default function Pneus(){
    return(
        <S.Items>
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
              <S.InfoIcon>
                <S.Info>
                  Pneu Firestone Aro 16 Destination A/T 225/70R16 102/99S
                </S.Info>
                <i className="im im-trash-can"></i>
              </S.InfoIcon>
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
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </S.Quant>
              </S.QuantArea>
              <S.PreçoArea>
                <S.Label>Preço Total:</S.Label>
                <S.Preço>R$ 1.123,90</S.Preço>
              </S.PreçoArea>
            </S.QuantPreço>
          </S.Description>
        </S.ItemArea>
        </S.Items>
    )
}