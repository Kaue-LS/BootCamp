import NavBar from '../../Components/NavBar/NavBar'
import  NavButton  from '../../Components/NavButton/NavButton'
import * as S from './styled'
export default function Login(){
    return(
        <>
    <NavBar></NavBar>
    <NavButton></NavButton>
    <S.LoginCadastro>
        <S.Login>
            <S.Title>Já sou cliente</S.Title>
            <S.SubTitle>Você já tem uma Conta? Faça o Login para acessar as configurações da sua conta.</S.SubTitle>
            <S.FormGroup>
                <label>Endereço de e-mail</label>
                <S.Input type='text'/>
            </S.FormGroup>
            <S.FormGroup>
                <label>Senha</label>
                <S.Input type='password'/>
            </S.FormGroup>
            <p>Esqueci minha senha</p>
            <S.Entrar>entrar</S.Entrar>
        </S.Login>
        {/* ============================= */}
        <S.Cadastrar>
            <S.Title>Crie uma conta</S.Title>
            <S.FormGroup>
            <label>Eu sou:</label>
            <div>
            <input type='radio'/><label>Pessoa Fisica</label>
            <input type='radio'/><label>Pessoa Juridica</label>
            </div>
            <label>Primeiro nome <span>*</span></label>
            </S.FormGroup>
        </S.Cadastrar>
    </S.LoginCadastro>
    </>

    )
}