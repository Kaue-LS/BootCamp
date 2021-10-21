import { useState } from "react";
import { NavBarPrincipal } from "../../Components/NavBar/NavBar";
import NavButton from "../../Components/NavButton/NavButton";
import * as S from "./styled";
import './style.css'
import {CustomizedSteppersResponsive} from '../../Components/Stepper/Stepper'
// import { JwtHandler } from "../../jwt-handler/JwtHandler";
import * as moment from "moment";
import { maskCPF, maskPhone, maskDate } from "../../Components/Mask/Mask";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useHistory } from "react-router";
// import { Api } from "../../Api/Api";
import MenuMobile from '../../Components/MenuMobile/MenuMobile'

export default function Login({setToken}) {
  const [proximo, setProximo] = useState(false);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLog, setErroLog] = useState("");
  const [erroCad, setErroCad] = useState("");
  //==============================
  const [pessoa, setPessoa] = useState("");
  const [nome, setNome] = useState("");
  const [ultnome, setUltnome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [data, setData] = useState("");
  const [tel, setTel] = useState("");
  const [tel2, setTel2] = useState("");
  const [End, setEnd] = useState("");
  const [senhaCad, setSenhaCad] = useState("");
  const [senhaCad2, setSenhaCad2] = useState("");
  const [termos, setTermos] = useState(false);
  const history = useHistory();

  // ===========================================
  // Validar Login
const VerificarLogin=()=>{
    if(email.length===0){
      document.getElementById('error').style='display:block;'
      setErroLog('Email vázio')
    }
    else if(!email.match(/[@]/)){
      document.getElementById('error').style='display:block;'
      setErroLog('Email incorreto')
    }
    else if(senha===''){
      document.getElementById('error').style='display:block;'
      setErroLog('Senha vázio')
    }
    else{
      history.push(`/address`)
    }
}

// const Logar= async(event)=>{
//   event.preventDefault()
//   const item={
//     UserName:End,
//     passwordHash:senhaCad
//   }
//  const response = await Api.buildApiPostRequest(Api.CadastrarUrl(),item);
//  const body = await response.json();

//  if (response.status === 200) {
//      // Login successfully

//      const accessToken = body.accessToken;

//      // localStorage.setItem("JWT", accessToken);

//      JwtHandler.setJwt(accessToken);

//      console.log({ accessToken });

//      history.push(`/address`);
//  } else {
//      // Error
//  }
// }

  // Validar Cadastro
  const VerificarCadastro = (props) => {
    // console.log(dataNasc.isValid())
    if (pessoa === "") {
      document.getElementById('erro1').style='display:block;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:none;'
      setErroCad("Por favor indique que tipo de pessoa você é.");
    } else if (nome === "") {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:none;'
      document.getElementById('erro2').style='display:block;'
      setErroCad("Nome esta vázio");
    } else if (ultnome === "") {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:block;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:none;'

      setErroCad("Último nome esta vázio");
    } else if (cpf === "" && cpf.length < 14) {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:block;'
      document.getElementById('erro5').style='display:none;'
      setErroCad("CPF inválido");
    } else if (sexo === "") {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:block;'
      setErroCad("Sexo não preenchido");
    } else {
      setProximo(props);
    }
  };

  const VerificarCadastro2 = () => {
    const dataNasc = moment(data.toString(), "DD/MM/YYYY", true).isValid();
    if (dataNasc===false) {
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:none;'
      document.getElementById('erro1').style='display:block'
      setErroCad("Data inválida");
    } else if (tel === "" && tel.length < 15) {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:none;'
      document.getElementById('erro2').style='display:block;'
      setErroCad("Telefone inválido");
    } else if (tel2.length > 2 && tel2.length < 15) {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:block;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:none;'
      setErroCad("Telefone inválido");
    } else if (End.length ===0) {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:block;'
      document.getElementById('erro5').style='display:none;'
      setErroCad("Endereço do Email inválido");
    }
    else if (!End.match(/[@]/)) {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:block;'
      document.getElementById('erro5').style='display:none;'
      setErroCad("Endereço do Email inválido");
    } else if (senhaCad === "" || senhaCad.length < 9) {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:block;'
      setErroCad("Senha no mínimo 9 caracteres");
    } else if (senhaCad2.length === 0) {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:none;'
      document.getElementById('erro6').style='display:block;'
      setErroCad("Digitar senha novamente vázia");
    } else if (
      senhaCad !== "" &&
      senhaCad2 !== "" &&
      senhaCad2 !== senhaCad
    ) {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:none'
      document.getElementById('erro6').style='display:block;'
      setErroCad("As senha são diferentes");
    } else if (!termos) {
      document.getElementById('erro1').style='display:none;'
      document.getElementById('erro2').style='display:none;'
      document.getElementById('erro3').style='display:none;'
      document.getElementById('erro4').style='display:none;'
      document.getElementById('erro5').style='display:none'
      document.getElementById('erro6').style='display:none;'
      document.getElementById('erro7').style='display:block;'
      setErroCad("Termos e condições não aceitas");
    } else {
      history.push(`/address`)
    }

  };
  const AceitarTermo=(props)=>{
    setTermos(props)
  }

  // =====================================================================

  // const Cadastrar= async(event)=>{
  //   event.preventDefault()
  //   const item={
  //     UserName:End,
  //     passwordHash:senhaCad
  //   }
  //  const response = await Api.buildApiPostRequest(Api.CadastrarUrl(),item);
  //  const body = await response.json();

  //  if (response.status === 200) {
  //      // Login successfully

  //      const accessToken = body.accessToken;

  //      // localStorage.setItem("JWT", accessToken);

  //      JwtHandler.setJwt(accessToken);

  //      console.log({ accessToken });

  //      history.push(`/address`);
  //  } else {
  //      // Error
  //  }

  // }
  // ===========================================================
  return (
    <>
      <NavBarPrincipal />
      <NavButton></NavButton>
      <CustomizedSteppersResponsive props={0}></CustomizedSteppersResponsive>
      {/* ===================================================== */}
      <S.LoginCadastro>
        <S.LoginActive>
          <Accordion style={{ border: "1px solid gray" }}>
            <AccordionSummary>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <S.Title>Já sou cliente</S.Title>
                <S.SubTitle>
                  Você já tem uma Conta? Faça o Login para acessar as
                  configurações da sua conta. Clique aqui!
                </S.SubTitle>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <S.FormGroup>
                <label> Endereço de e-mail</label>
                <S.Input
                  value={email}
                  onChange={(props) => setEmail(props.target.value)}
                  type="text"
                  name="email"
                />
                 
                <label>Senha</label>
                <S.Input
                  value={senha}
                  onChange={(props) => setSenha(props.target.value)}
                  type="password"
                  name="password"
                />
                  <div id='error'>
                     <p className="error">{erroLog}</p>
                  </div>
                <p>Esqueci minha senha</p>
                  <S.Button onClick={()=>VerificarLogin()}>entrar</S.Button>
              </S.FormGroup>
            </AccordionDetails>
          </Accordion>
        </S.LoginActive>

        {/* ============================= */}

        <S.CadastrarActive >
          <Accordion style={{ border: "1px solid gray" }}>
            <AccordionSummary style={{ height: "6.35rem" }}>
              <S.Title>Crie uma conta</S.Title>
              <S.SubTitle>Seja cliente da PneuStore.</S.SubTitle>
              <S.SubTitle>Clique aqui!</S.SubTitle>
            </AccordionSummary>
            <AccordionDetails>
              {proximo ? (
                <S.FormGroup>
                 
                  <div>
                    <label>
                      Data de nascimento <span>*</span>
                    </label>
                    <input
                      value={data}
                      className="inputmask"
                      onChange={(props) =>
                        setData(maskDate(props.target.value))
                      }
                      required
                    />
                    <div id='erro1'>
                     <p className="error">{erroCad}</p>
                     </div>
                  </div>
                  <div>
                    <label>
                      Seu telefone (Celular de preferência) <span>*</span>
                    </label>
                    <input
                      value={tel}
                      className="inputmask"
                      onChange={(e) => setTel(maskPhone(e.target.value))}
                      required
                    />
                     <div id='erro2'>
                     <p className="error">{erroCad}</p>
                     </div>
                  </div>
                  <div style={{display:'flex'}} >
                    <label>Outro telefone (Opcional)</label>
                    <input
                      value={tel2}
                      className="inputmask"
                      onChange={(e) => setTel2(maskPhone(e.target.value))}
                    />
                    
                  </div>
                  <div id='erro3'>
                     <p className="error">{erroCad}</p>
                     </div>
                  <div>
                    <label>
                      Endereço de Email <span>*</span>
                    </label>
                    <S.Input
                      onChange={(props) => setEnd(props.target.value)}
                      type="email"
                      required
                    />
                     <div id='erro4'>
                     <p className="error">{erroCad}</p>
                     </div>
                  </div>
                  <div>
                    <label>
                      Senha <span>*</span>
                    </label>
                    <S.Input
                      maxLength="12"
                      onChange={(props) => setSenhaCad(props.target.value)}
                      type="password"
                      required
                    />
                     <div id='erro5'>
                     <p className="error">{erroCad}</p>
                     </div>
                  </div>
                  <div>
                    <label>
                      Confirmar senha<span>*</span>
                    </label>
                    <S.Input
                      maxLength="12"
                      onChange={(props) => setSenhaCad2(props.target.value)}
                      type="password"
                      required
                    />
                     <div id='erro6'>
                     <p className="error">{erroCad}</p>
                     </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <S.Radio
                      onClick={() => AceitarTermo(true)}
                      type="checkbox"
                      name="Temos e condições"
                    />
                    <label>
                      Eu confirmo que li e concordo com os{" "}
                      <span>Termos & Condições</span>
                    </label>
                    <div id='erro7'>
                     <p className="error">{erroCad}</p>
                     </div>
                  </div>
                  <div>
                    <S.Button onClick={() => VerificarCadastro2()}>
                      Finalizar Cadastro
                    </S.Button>
                    <S.Button onClick={() => VerificarCadastro(false)}>
                      Voltar
                    </S.Button>
                  </div>
                </S.FormGroup>
              ) : (
                <S.FormGroup>

                  <label>Eu sou:</label>
                  <div className="radio">
                    <S.Radio
                      type="radio"
                      name="pessoas"
                      onChange={(props) => setPessoa(props.target.value)}
                      value="Pessoa Fisica"
                      required
                    />
                    <label>Pessoa Fisica</label>
                    <S.Radio
                      type="radio"
                      name="pessoas"
                      onChange={(props) => setPessoa(props.target.value)}
                      value="Pessoa Jurídica"
                      required
                    />
                    <label>Pessoa Jurídica</label>
                  </div>
                  <div id='erro1'>
                     <p className="error">{erroCad}</p>
                     </div>
                  <div>
                    <label>
                      Primeiro nome <span>*</span>
                    </label>
                    <S.Input
                      value={nome}
                      onChange={(props) => setNome(props.target.value)}
                      type="text"
                      required
                    />
                      <div id='erro2'>
                     <p className="error">{erroCad}</p>
                     </div>
                  </div>
                  <div>
                    <label>
                      Último nome <span>*</span>
                    </label>
                    <S.Input
                      value={ultnome}
                      onChange={(props) => setUltnome(props.target.value)}
                      type="text"
                      required
                    />
                     <div id='erro3'>
                     <p className="error">{erroCad}</p>
                     </div>
                  </div>
                  <div>
                    <label>
                      CPF<span>*</span>
                    </label>
                    <div>
                      <input
                        value={cpf}
                        className="inputmask"
                        onChange={(e) => setCpf(maskCPF(e.target.value))}
                        required
                      />
                       <div id='erro4'>
                     <p className="error">{erroCad}</p>
                     </div>
                    </div>
                  </div>
                  <label>Sexo</label>
                  <div className="radio">
                    <S.Radio
                      type="radio"
                      name="sexo"
                      onChange={(props) => setSexo(props.target.value)}
                      value="Masculino"
                      required
                    />
                    <label>Masculino</label>
                    <S.Radio
                      type="radio"
                      name="sexo"
                      onChange={(props) => setSexo(props.target.value)}
                      value="Feminino"
                      required
                    />
                    <label>Feminino</label>
                    <div id='erro5'>
                     <p className="error">{erroCad}</p>
                     </div>
                  </div>
                  <S.Button onClick={() => VerificarCadastro(true)}>
                    Continuar
                  </S.Button>
                </S.FormGroup>
              )}
            </AccordionDetails>
          </Accordion>
        </S.CadastrarActive>
      </S.LoginCadastro>
      <MenuMobile></MenuMobile>
    </>
  );
}
