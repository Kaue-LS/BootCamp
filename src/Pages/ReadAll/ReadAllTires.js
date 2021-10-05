import ProductOptions from "./ProductOptions";
import * as S from "./styled";
import {NavBarPrincipal} from "../../Components/NavBar/NavBar";
import NavButton from "../../Components/NavButton/NavButton";
import Pneu from "./Pneu";
export default function ReadAllTires() {
  return (
    <>
      <NavBarPrincipal/>
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
              <p>Ordenar por:</p>

              <S.Order>
                <option>Relevância</option>
                <option>Melhor classificado</option>
                <option>Nome(crescente)</option>
                <option>Nome(decrescente)</option>
                <option>Preço(menores primeiro)</option>
                <option>Preço(maiores primeiros)</option>
              </S.Order>
            </S.NavItems>
            {/* ======================= */}

            <S.Pneus>
            <Pneu></Pneu>
            </S.Pneus>
          </S.Tires>
        </aside>
      </S.ReadAllTires>
    </>
  );
}
