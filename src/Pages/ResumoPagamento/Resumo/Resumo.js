import * as S from './styled'
export default function Resumo(){
    return(
        <S.Resumo>
            <h1>Resumo do pedido <i class="im im-task-o"></i></h1>
            <div>
                <h3>Data do pedido:</h3>
                <span>21/out/2021</span>
            </div>
            <div>
                <h3>Forma de pagamento:</h3>
                <span>Boleto</span>
            </div>
            <div>
                <h3>Linha digitável:</h3>
                <span> 13131.12413.123123.131212 2313123 5 12313123123</span>
            </div>
            <div>
                <h3>Vencimento do boleto:</h3>
                <span>22/out/2021</span>
            </div>
            <button>Imprimir Boleto</button>
            <div>
                <h3>Total:</h3>
                <span className='total'> R$ 1.237,85</span>
            </div>
        </S.Resumo>
    )
}