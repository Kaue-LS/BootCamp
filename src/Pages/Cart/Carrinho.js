// import {  useState } from "react";
import PneuList from './Pneu/CartList';
import CartICon from '../../Components/img/cart.jpg'
import * as S from "./styled";
import {NavBarSecundaria} from "../../Components/NavBar/NavBar";
import MenuMobile from '../../Components/MenuMobile/MenuMobile'
import Resumo from './Resumo/Resumo'
import Entrega from './MetodosEntrega/OpçõesEntrega';

export default function Carrinho(props) {
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


    {/* Metodos de entrega */}
    <Entrega></Entrega>


{/* Area do resumo */}
        <Resumo props={1}/>
        <MenuMobile></MenuMobile>
    </>
    
  );
}
