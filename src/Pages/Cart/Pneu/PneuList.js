import Pneus from "./Pneus"
// import { ApiGet } from "../../../Components/Api/Api";
import * as S from './styled'
export default function PneuList(){

    const pneucard=1;
    // const [loading, setLoading] = useState(true);
  
    // useEffect(() => {
    //   if (loading) {
    //     fetchApi();
    //   }
    // });
    // const fetchApi = async () => {
    //   const response = await ApiGet.buildApiGetRequest(ApiGet.ReadCart());
  
    //   const dados = await response.json();
  
    //   setPneu(dados.results);
    //   setLoading(false);
    // };


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