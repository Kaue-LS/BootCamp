// import {  useState } from "react";
import PneuList from './Pneu/PneuList';
import CartICon from '../../Components/img/cart.jpg'
import * as S from "./styled";
import {NavBarSecundaria} from "../../Components/NavBar/NavBar";
import  Resumo  from "./Resumo/Resumo";
export default function Carrinho(props) {
 console.log(props)
  return (
    <>
   
    <NavBarSecundaria/>
      {/* Carrinho de compra */}
      <S.Header>
        <S.CartIcon
          src={CartICon}
          alt="Cart"
        />
        <h3>Meu Carrinho de compras</h3>
      </S.Header>



        {/* Parte onde os pneus vao aparecer, eles estao no arquivo Pneu */}
          <PneuList></PneuList>       

      
        {/* Area dos cupons */}
        {/* Area do resumo  e dos botoes*/}
        <Resumo props={1}/>
    </>
    
  );
}
