import { useState } from "react";
import { NavBarPrincipal } from "../../Components/NavBar/NavBar";
import NavButton from "../../Components/NavButton/NavButton";
import * as S from "./styled";
import { Link } from "react-router-dom";
import CustomizedSteppers from "../../Components/Stepper/Stepper";
import { maskCPF,maskPhone,maskDate } from "../../Components/Mask/Mask";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [cadastrar, setCadastrar] = useState(true);
  const [proximo, setProximo] = useState(false);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //==============================

//   const [pessoafj, setPessoafj] = useState("");
//   const [primerio, setPrimeiro] = useState("");
//   const [ultimo, setUltimo] = useState("");
  const [cpf, setCpf] = useState("");
//   const [sexo, setSexo] = useState("");

  const [data, setData] = useState("");
  const [tel, setTel] = useState("");
  const [tel2, setTel2] = useState("");
  const [senha2, setSenha2] = useState("");

  const Login = (props) => {
    if (props === false) {
      setLogin(false);
    } else {
      setLogin(true);
      setCadastrar(false);
    }
  };
  console.log(login);
  const Cadastrar = (props) => {
    if (props === false) {
      setCadastrar(false);
    } else {
      setCadastrar(true);
      setLogin(false);
    }
  };

  const VerificarCadastro = (props) => {
    setProximo(props);
  };



  return (
    <>
      <NavBarPrincipal />
      <NavButton></NavButton>
      <CustomizedSteppers props={0} />
      <S.LoginCadastro>
        {login ? (
          <S.LoginActive>
            <S.Title>Já sou cliente</S.Title>
            <S.SubTitle>
              Você já tem uma Conta? Faça o Login para acessar as configurações
              da sua conta.
            </S.SubTitle>
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
          </S.LoginActive>
        ) : (
          <S.Login id="login" onClick={() => Login(true)}>
            <S.Title>Já sou cliente</S.Title>
            <S.SubTitle>
              Você já tem uma Conta? Faça o Login para acessar as configurações
              da sua conta.
            </S.SubTitle>
          </S.Login>
        )}

        {/* ============================= */}

        {cadastrar ? (
          <S.CadastrarActive>
            <S.Title>Crie uma conta</S.Title>
            <S.SubTitle>Seja cliente da PneuStore.</S.SubTitle>

            {proximo ? (
              <S.FormGroup>
                <div>
                  <label>
                    Data de nascimento <span>*</span>
                  </label>
                  <input
         className='inputmask'
         value={data}
        onChange={(e) => setData(maskDate(e.target.value))}
        required
      />
                </div>
                <div>
                  <label>
                    Seu telefone (Celular de preferência) <span>*</span>
                  </label>
                  <input
        value={tel} className='inputmask'
        onChange={(e) => setTel(maskPhone(e.target.value))}
        required
      />
                </div>
                <div>
                  <label>Outro telefone (Opcional)</label>
                  <input
        value={tel2} className='inputmask'
        onChange={(e) => setTel2(maskPhone(e.target.value))}
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
                    value={senha2}
                    onChange={(props) => setSenha2(props.target.value)}
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
                    onChange={(props) => (props.target.value)}
                    value="Pessoa Fisica"
                    required
                  />
                  <label>Pessoa Fisica</label>
                  <S.Radio
                    type="radio"
                    name="pessoas"
                    onChange={(props) => (props.target.value)}
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
                    onChange={(props) => (props.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label>
                    Último nome <span>*</span>
                  </label>
                  <S.Input
                    onChange={(props) =>(props.target.value)}
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
                      value={cpf}
                      className="inputmask"
                      onChange={(e) => setCpf(maskCPF(e.target.value))}
                      required
                    />
                  </div>
                </div>
                <label>Sexo</label>
                <div className="radio">
                  <S.Radio
                    type="radio"
                    name="sexo"
                    onChange={(props) => (props.target.value)}
                    value="Masculino"
                    required
                  />
                  <label>Masculino</label>
                  <S.Radio
                    type="radio"
                    name="sexo"
                    onChange={(props) => (props.target.value)}
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
          </S.CadastrarActive>
        ) : (
          <S.Cadastrar id="cadastrar" onClick={() => Cadastrar(true)}>
            <S.Title>Crie uma conta</S.Title>
            <S.SubTitle>Seja cliente da PneuStore.</S.SubTitle>
          </S.Cadastrar>
        )}
      </S.LoginCadastro>
    </>
  );
}
