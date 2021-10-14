import ProductOptions from "./ProductOptions";
import * as S from "./styled";
import {NavBarPrincipal} from "../../Components/NavBar/NavBar";
import NavButton from "../../Components/NavButton/NavButton";
import PneuList from "./Pneu/PneuList";

export default function ReadAllTires() {
 


  
  return (
    <>
    {/* Header */}
      <NavBarPrincipal props={0}/>
      <NavButton></NavButton>
      <S.ReadAllTires>

        {/* Botoes lateral da pagina */}
        <ProductOptions />
        <aside>
          <S.Tires>
            <S.Type>Firestone</S.Type>
            <S.NavItems>
              <div>
                <p>
                  <span>57</span> item(s) encontrado(s)
                </p>
                <p>
                  {" "}
                  Exibindo <span>1</span>-<span>20</span> de <span>57</span>
                  itens
                </p>
              </div>
              <div>
              <p>Ordenar por:</p>

              <S.Order>
                <option>Relevância</option>
                <option>Melhor classificado</option>
                <option>Nome(crescente)</option>
                <option>Nome(decrescente)</option>
                <option>Preço(menores primeiro)</option>
                <option>Preço(maiores primeiros)</option>
              </S.Order>
              </div>

              <S.Refinar>Refinar</S.Refinar>
            </S.NavItems>
            {/* ======================= */}
{/* Area dos Pneus */}
            <S.Pneus>
            <PneuList></PneuList>
            </S.Pneus>
          </S.Tires>
        </aside>
      </S.ReadAllTires>
    </>
  );
}
