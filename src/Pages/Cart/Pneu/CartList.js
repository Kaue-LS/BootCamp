import { Api } from "../../../Api/Api";
import * as S from "./styled";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
export default function CartList(pneus) {
 const[loading,setLoading]=useState(true)
 const [pneu,setPneu]=useState([])
const [id]=useState(pneus.cartID)

const [quant,setQuant]=useState(1)
  const history=useHistory()
  const RemovePneu= async()=>{
    await Api.buildApiDeleteRequest(Api.DeleteProduct(pneus.Cart))
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

 useEffect(()=>{
  if(loading){
    BuscarPneu()
  }
 },)
 const BuscarPneu= async()=>{
    const response= await Api.buildApiRequest(Api.ReadProductID(id))
    const res= await response.json()
    setPneu(res)
    setLoading(false)
 }
  return (
    <>
          {!loading ? (
                <S.Itens>
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
                        // onChange={(props) => VerificarPreço(props.target.value)}
                      >
                        {(pneu.unitPrice).toFixed(2)}
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
        
              </S.Itens>
          ) : (
           null
          )}
        </>
  );
}
