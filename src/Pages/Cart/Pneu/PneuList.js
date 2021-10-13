import { useState,useEffect } from "react"
import Pneus from "./Pneus"
import { Api } from "../../../Components/Api/Api";
import * as S from './styled'
export default function PneuList(){

    const [pneucard, setPneu] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (loading) {
        fetchApi();
      }
    });
    const fetchApi = async () => {
      const response = await Api.buildApiGetRequest(Api.ReadCart());
  
      const dados = await response.json();
  
      setPneu(dados.results);
      setLoading(false);
    };


    return(
    <>
    { pneucard.length >0?(
        <>
        { pneucard.map((pneu)=>(
             <S.Itens>
            <Pneus pneu={pneu}></Pneus>
            </S.Itens>
        ))}
        </>
    ):(
        <S.Vazio>

        <S.Cart src='https://www.pneustore.com.br/_ui/responsive/common/images/cart.png' alt=''/>
        <h1>Seu carrinho está vazio</h1>
        <p>Adicione produtos clicando no botão “Comprar” na página de produto.</p>
        </S.Vazio>
    )
    }
        </>
    )    
  
}