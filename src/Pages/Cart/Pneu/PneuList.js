import { useState } from "react"
import Pneus from "./Pneus"
import * as S from './styled'
export default function PneuList(){
    const [pneu,setPneu]=useState([0])

    return(
    <>
    { pneu>=1?(
        <>
        { pneu.map((pneu)=>(
             <S.Itens>
            <Pneus></Pneus>
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