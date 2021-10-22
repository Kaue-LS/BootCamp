import {  useState, useEffect } from "react";
import PneuList from './Pneu/CartList';
import { Api } from "../../Api/Api";
import CartICon from '../../Components/img/cart.jpg'
import * as S from "./styled";
import {NavBarSecundaria} from "../../Components/NavBar/NavBar";
import MenuMobile from '../../Components/MenuMobile/MenuMobile'
import Resumo from './Resumo/Resumo'
import Entrega from './MetodosEntrega/OpçõesEntrega';

export default function Carrinho(props) {
  const [loading, setLoading] = useState(true);
  const [pneu, setPneu] = useState([]);
  // //  let IDpneu=
  useEffect(() => {
    if (loading) {
      ObterID();
    }
  });


  const ObterID = async () => {
    const response = await Api.buildApiRequest(Api.SelectedTires());

    const results = await response.json();
    
    setPneu(results);
    setLoading(false)
  };
  return (
    <>
   
    <NavBarSecundaria location={'/'}/>
      {/* Carrinho de compra */}
      <S.Header>
        <S.CartIcon
          src={CartICon}
          alt="Cart"
        />
        <h3>Meu Carrinho de compras</h3>
      </S.Header>

    { pneu.length>0?(
      pneu.map((item)=>(
      <PneuList key={item.itemId} cartID={item.productId}></PneuList>
      ))
    ):(
      <S.Vazio>
              <S.Cart
                src="https://www.pneustore.com.br/_ui/responsive/common/images/cart.png"
                alt=""
              />
              <h1>Seu carrinho está vazio</h1>
              <p>
                Adicione produtos clicando no botão “Comprar” na página de
                produto.
              </p>
            </S.Vazio>
    )
                
    }

    {/* Metodos de entrega */}
    <Entrega></Entrega>


{/* Area do resumo */}
        <Resumo props={1}/>
        <MenuMobile></MenuMobile>
    </>
    
  );
}
