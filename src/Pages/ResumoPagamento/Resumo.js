import * as S from './styled'
import MenuMobile, { } from '../../Components/MenuMobile/MenuMobile'
import CustomizedSteppers from '../../Components/Stepper/Stepper'
import { NavBarTerciaria } from '../../Components/NavBar/NavBar'
export default function ResumoPagamento(){
    return(
    <>
    <NavBarTerciaria></NavBarTerciaria>
    <CustomizedSteppers props={4}></CustomizedSteppers>
    <S.Resumo>
        <S.Title>Resumo do Pedido</S.Title>

        <S.SubTitle>Nome do Cliente:</S.SubTitle>
        <S.dados>
            <div>
            <h3>Nome:</h3><span></span>
            </div>
            <div>
                <h3>Sobrenome:</h3><span></span>
            </div>
        </S.dados>
        
        <S.SubTitle>Endereço:</S.SubTitle>
        <S.Endereço>
            <h3>Nome do endereço:</h3><span></span>
            <h3>Estado:</h3><span></span>
            <h3>Cidade:</h3><span></span>
            <h3>Cep:</h3><span></span>
            </S.Endereço>
        <S.SubTitle>Forma de Entrega:</S.SubTitle>
        <S.Entrega>

        </S.Entrega>
        <S.SubTitle>Forma de Pagamento:</S.SubTitle>
        <S.Pagamento>
            
        </S.Pagamento>
    </S.Resumo>
    <MenuMobile></MenuMobile>
    </>
    )
}