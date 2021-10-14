import Pneus from "./Pneus"
// import { ApiGet } from "../../../Components/Api/Api";
import * as S from './styled'
// import { useState,useEffect } from "react";
export default function PneuList(){

    const pneucard=1;
    // const [loading, setLoading] = useState(true);
//  const [pneu,setPneu]= useState([])
 
//  useEffect(()=>{
//     if(loading){
//       fecthApi()
//     }
//   })

//     const fecthApi=()=>{
//         ApiGet.get('/Cart')
//         .then(res=>{
//           const pneu=res.data
//           setPneu(pneu.results)
//           setLoading(false)
//           console.log(pneu)
//       })}  
 

    return(
    <>
    { pneucard>0?(
        <>
             <S.Itens>
            <Pneus></Pneus>
            </S.Itens>
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