import { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import  NavButton  from '../../Components/NavButton/NavButton'
import * as S from './styled'
export default function Login(){
    const [login,setLogin]=useState(false)
    const [cadastrar,setCadastrar]= useState(true)
    const [proximo,setProximo]=useState(false)
    const Login=(props)=>{
        if(props===false){
        setLogin(false)
        document.getElementById('login').style=`
            position:relative;
            margin-left:-300px;
            opacity:0.5;
        `;
        }
        else{
            setLogin(true)
            setCadastrar(false)
        }
    }
    console.log(login)
    const Cadastrar=(props)=>{
        if(props===false){
            setCadastrar(false)
            document.getElementById('cadastrar').style=`
            position:relative;
            margin-right:-300px;
            opacity:0.5;
            
            `;
        }
        else{
            setCadastrar(true)
            setLogin(false)
        }
    }

    const VerificarCadastro=(props)=>{
        setProximo(props)
    }

   
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
            <S.Login id='login' onClick={()=>Login(true)}>
            <S.Title>Já sou cliente</S.Title>
            <S.SubTitle>Você já tem uma Conta? Faça o Login para acessar as configurações da sua conta.</S.SubTitle>
            </S.Login>
        )
          
        }





        {/* ============================= */}


        {cadastrar?(
        <S.CadastrarActive>
            <S.Title>Crie uma conta</S.Title>
            
            {
                proximo?(
                    <S.FormGroup>
                    
                    <div>
                    <label>Data de nascimento <span>*</span></label>
                    <S.Input type='text' required/>
                    </div>
                    <div>
                    <label>Seu telefone '('Celular de preferência')' <span>*</span></label>
                    <S.Input type='text' required/>
                    </div>
                    <div>
                    <label>Outro telefone '('Opcional')'</label>
                    <S.Input type='text'/>
                    </div>
                    <div>
                    <label>Endereço de Email <span>*</span></label>
                    <S.Input type='text' required/>
                    </div>
                    <div>
                    <label>Senha <span>*</span></label>
                    <S.Input type='text' required/>
                    </div>
                    <div>
                    <label>Confirmar senha<span>*</span></label>
                    <S.Input type='text' required/>
                    </div>
                    <div>
                    <S.Radio type='radio' name='pessoas' required/><label>Eu confirmo que li e concordo com os <span>Termos & Condições</span></label>
                    </div>
                    <div>
                    <button onClick={()=>VerificarCadastro(false)}>Voltar</button>
                    <button >Finalizar Cadastro</button>
                    </div>
                    </S.FormGroup>
                ):(
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
            <button onClick={()=>VerificarCadastro(true)}>Continuar</button>
            </S.FormGroup>
                )
            }
           
        </S.CadastrarActive>
        ):(
            <S.Cadastrar id='cadastrar' onClick={()=>Cadastrar(true)}>
            <S.Title>Crie uma conta</S.Title>
            </S.Cadastrar>
        )
}
    </S.LoginCadastro>
    </>

    )
}