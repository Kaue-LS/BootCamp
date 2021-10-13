import { useState } from "react";
import { NavBarPrincipal } from "../../Components/NavBar/NavBar";
import NavButton from "../../Components/NavButton/NavButton";
import * as S from "./styled";
import { Link } from "react-router-dom";
import CustomizedSteppers from "../../Components/Stepper/Stepper";
// import { maskCPF, maskPhone, maskDate } from "../../Components/Mask/Mask";
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
export default function Login() {
  const [proximo, setProximo] = useState(false);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //==============================

  // const [pessoafj, setPessoafj] = useState("");
  // const [primerio, setPrimeiro] = useState("");
  // const [ultimo, setUltimo] = useState("");
  // const [cpf, setCpf] = useState("");
  // const [sexo, setSexo] = useState("");

  // const [data, setData] = useState("");
  // const [tel, setTel] = useState("");
  // const [tel2, setTel2] = useState("");
  // const [senha2, setSenha2] = useState("");

 

  const VerificarCadastro = (props) => {
    setProximo(props);
  };

  return (
    <>
      <NavBarPrincipal />
      <NavButton></NavButton>
      <CustomizedSteppers props={0} />
      {/* ===================================================== */}
      <S.LoginCadastro>
          <S.LoginActive>
          <Accordion style={{border:'1px solid gray'}} >
            
            <AccordionSummary  >
              <div style={{display:'flex', flexDirection:"column"}}>
            <S.Title>Já sou cliente</S.Title>
            <S.SubTitle>
              Você já tem uma Conta? Faça o Login para acessar as configurações
              da sua conta. Clique aqui!
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
              />

              <label>Senha</label>
              <S.Input
                value={senha}
                onChange={(props) => setSenha(props.target.value)}
                type="password"
              />
              <p>Esqueci minha senha</p>
              <Link to="/address">
                <S.Button>entrar</S.Button>
              </Link>
            </S.FormGroup>
            </AccordionDetails>
            </Accordion>       

          </S.LoginActive>

        {/* ============================= */}

          <S.CadastrarActive>
            <Accordion style={{border:'1px solid gray'}}>
              <AccordionSummary style={{height:'6.35rem'}}>
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
                  // value={data}
                    className="inputmask"
                    // onChange={(props) => setData(maskDate(props.target.value))}
                    required
                  />
                </div>
                <div>
                  <label>
                    Seu telefone (Celular de preferência) <span>*</span>
                  </label>
                  <input
                    // value={tel}
                    className="inputmask"
                    // onChange={(e) => setTel(maskPhone(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <label>Outro telefone (Opcional)</label>
                  <input
                    // value={tel2}
                    className="inputmask"
                    // onChange={(e) => setTel2(maskPhone(e.target.value))}
                  />
                </div>
                <div>
                  <label>
                    Endereço de Email <span>*</span>
                  </label>
                  <S.Input
                    value={email}
                    onChange={(props) => setEmail(props.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label>
                    Senha <span>*</span>
                  </label>
                  <S.Input
                    value={senha}
                    onChange={(props) => setSenha(props.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label>
                    Confirmar senha<span>*</span>
                  </label>
                  <S.Input
                    // value={senha2}
                    // onChange={(props) => setSenha2(props.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <S.Radio type="radio" name="pessoas" required />
                  <label>
                    Eu confirmo que li e concordo com os{" "}
                    <span>Termos & Condições</span>
                  </label>
                </div>
                <div>
                  <Link
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                    to="/address"
                  >
                    <S.Button>Finalizar Cadastro</S.Button>
                  </Link>
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
                    // onChange={(props) => setPessoafj(props.target.value)}
                    value="Pessoa Fisica"
                    required
                  />
                  <label>Pessoa Fisica</label>
                  <S.Radio
                    type="radio"
                    name="pessoas"
                    // onChange={(props) => setPessoafj(props.target.value)}
                    value="Pessoa Jurídica"
                    required
                  />
                  <label>Pessoa Jurídica</label>
                </div>
                <div>
                  <label>
                    Primeiro nome <span>*</span>
                  </label>
                  <S.Input
                    // onChange={(props) => setPrimeiro(props.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label>
                    Último nome <span>*</span>
                  </label>
                  <S.Input
                    // onChange={(props) => setUltimo(props.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label>
                    CPF<span>*</span>
                  </label>
                  <div>
                    <input
                      // value={cpf}
                      className="inputmask"
                      // onChange={(e) => setCpf(maskCPF(e.target.value))}
                      required
                    />
                  </div>
                </div>
                <label>Sexo</label>
                <div className="radio">
                  <S.Radio
                    type="radio"
                    name="sexo"
                    // onChange={(props) => setSexo(props.target.value)}
                    value="Masculino"
                    required
                  />
                  <label>Masculino</label>
                  <S.Radio
                    type="radio"
                    name="sexo"
                    // onChange={(props) => setSexo(props.target.value)}
                    value="Feminino"
                    required
                  />
                  <label>Feminino</label>
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
    </>
  );
}
