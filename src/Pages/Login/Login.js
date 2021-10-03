import { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import  NavButton  from '../../Components/NavButton/NavButton'
import * as S from './styled'
export default function Login(){
    const [login,setLogin]=useState(false)
    const [cadastrar,setcadastrar]= useState(true)
    const Login=()=>{
        if(login===false){
        document.getElementById('login').style=`
        z-index:0;
            position:relative;
            margin-left:-300px;
            opacity:0.5;
        `;

        }
        else{
            setcadastrar(false)
        }
    }
    const Cadastrar=()=>{
        if(cadastrar===false){
            document.getElementById('cadastrar').style=`
            z-index:0;
            position:relative;
            margin-right:-300px;
            opacity:0.5;
            
            `;
        }
        else{
            setLogin(false)
        }
    }

    useEffect(()=>{
        Login()
        Cadastrar()
    });
    return(
        <>
    <NavBar></NavBar>
    <NavButton></NavButton>
    <S.LoginCadastro>
        
        {   login?(
             
            <S.LoginActive>
            <S.Title>Já sou cliente</S.Title>
             <S.SubTitle>Você já tem uma Conta? Faça o Login para acessar as configurações da sua conta.</S.SubTitle>
                  <S.FormGroup>
                  <label>Endereço de e-mail</label>
                  <S.Input type='text'/>
              
                  <label>Senha</label>
                  <S.Input type='password'/>
                  <p>Esqueci minha senha</p>
              <S.Entrar>entrar</S.Entrar>
              </S.FormGroup>
              </S.LoginActive>
        ):(
            <S.Login id='login' onClick={()=>setLogin(true)}>
            <S.Title>Já sou cliente</S.Title>
            <S.SubTitle>Você já tem uma Conta? Faça o Login para acessar as configurações da sua conta.</S.SubTitle>
            </S.Login>
        )
          
        }





        {/* ============================= */}


        {cadastrar?(
        <S.CadastrarActive>
            <S.Title>Crie uma conta</S.Title>
            <S.FormGroup>
            <label>Eu sou:</label>
            <div>
            <S.Radio type='radio' name='pessoas' required/><label>Pessoa Fisica</label>
            <S.Radio type='radio' name='pessoas' required/><label>Pessoa Juridica</label>
            </div>
            <div>
            <label>Primeiro nome <span>*</span></label>
            <S.Input type='text' required/>
            </div>
            <div>
            <label>Último nome <span>*</span></label>
            <S.Input type='text' required/>
            </div>
            <div>
            <label>CPF<span>*</span></label>
            <div>
            <S.Input type='text' required/>
            </div>
            </div>
            <label>Sexo</label>
            <div>
            <S.Radio type='radio'name='sexo' required/><label>Masculino</label>
            <S.Radio type='radio' name='sexo' required/><label>Feminino</label>
            </div>
            <button>Continuar</button>
            </S.FormGroup>
        </S.CadastrarActive>
        ):(
            <S.Cadastrar id='cadastrar' onClick={()=>setcadastrar(true)}>
            <S.Title>Crie uma conta</S.Title>
            </S.Cadastrar>
        )
}
    </S.LoginCadastro>
    </>

    )
}