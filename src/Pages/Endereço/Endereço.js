import { NavBarTerciaria } from "../../Components/NavBar/NavBar"
import * as S from './styled'
import Box from '../../Components/img/Box.jpg'
import CustomizedSteppers from "../../Components/Stepper/Stepper"
import { useState } from "react"
import { maskCEP } from "../../Components/Mask/Mask"
import ListaEndereço from "./ListaEnder"
import { Link } from "react-router-dom"
import MenuMobile from '../../Components/MenuMobile/MenuMobile'

export default function Address(){
    const [showAdd,setShowAdd]=useState(false)
    const [next,setNext]=useState(false)
    const [lista,setLista]= useState()
    // ====================
    const [nomeEnd,setNomeEnd]=useState('')
    const [cep,setCep] =useState("")
    const [estado,setEstado]=useState('')
    const [cidade,setCidade]=useState("")
    const [end,setEnd]=useState('')
    const [num,setNum]=useState('')
    const [comp,setComp]=useState("")
    const [bairro,setBairro]=useState('')
    const [ponto,setPonto]=useState('')

    let dados={
        nomeEnd:nomeEnd,
        cep: cep,
        estado: estado,
        cidade: cidade,
        end: end,
        num: num,
        comp: comp,
        bairro: bairro,
        ponto: ponto,
    }
    const AdicionarLista=()=>{
        setLista(lista+1)
    }

    
    return(
        <>
        <NavBarTerciaria location={'/checkout'}></NavBarTerciaria>
        <CustomizedSteppers props={1}/>

        <S.Endereço>
            <S.Dados>
            <S.DadosCliente>
                <h3>Dados do cliente</h3>
                <div>
                    <div>
                    <p>Nome:</p> <span>Kauê Leite</span>
                    </div>
                    <div>
                    <p>Email:</p> <span>Kaue@gmail.com</span>
                    </div>
                </div>
            </S.DadosCliente>
            <S.EndereçoEntrega>
                <h3>Endereço de entrega <img src={Box} alt=''/></h3>
                <button onClick={()=>setShowAdd(true)}>Adicione o endereço</button>
                </S.EndereçoEntrega>
            </S.Dados>
{  showAdd?(          
                <S.AdicionarEndereço>
{   next?(
    <S.Form>
        <S.Header>
        <i onClick={()=>setShowAdd(false)} className="im im-x-mark-circle-o"></i>
        <h3>Preenche o formulario:</h3>
        </S.Header>
    <S.FormBlock>
       <div>
       <S.Label>Número <span>*</span></S.Label>
       <S.Input onChange={(e)=>setNum(e.target.value)}/>
       </div>
       <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
         <S.Checked  type='checkbox'/> <p style={{margin:'10px 10px'}}>Sem Número</p>
         </div>
         <div>
         <S.Label>Complemento (Opcional)</S.Label>
         <S.Input onChange={(e)=>setComp(e.target.value)}/>
         </div>
         <div>
         <S.Label>Bairro <span>*</span></S.Label>
         <S.Input onChange={(e)=>setBairro(e.target.value)}/>
         </div>
         <div>
         <S.Label>Ponto de referência (Opcional)</S.Label>
         <S.Input onChange={(e)=>setPonto(e.target.value)}/>
         </div>
         <div style={{display:'flex',flexDirection:'row-reverse'}}>
         <Link to='/delivery'>    
         <button onClick={()=>AdicionarLista()}>Adicionar</button>
         </Link>
         <button onClick={()=>setNext(false)}>Voltar</button>
         </div>
         </S.FormBlock>
         </S.Form>
):(
                  <S.Form>
                  <S.Header>
        <i onClick={()=>setShowAdd(false)} className="im im-x-mark-circle-o"></i>
        <h3>Preenche os dados:</h3>
        </S.Header>
        <S.FormBlock>
                  <div>
                  <S.Label>Nome do Endereço <span>*</span></S.Label>
                  <S.Input onChange={(e)=>setNomeEnd(e.target.value)}/>
                  </div>
                  <div>
                  <S.Label>Cep <span>*</span></S.Label>
                  <input
        value={cep}
        maxLength="9" className='inputmask'
        onChange={(e) => setCep(maskCEP(e.target.value))}
      />                  
      </div>
                  <div>
                  <S.Label>Estado <span>*</span></S.Label>
        <S.Select onChange={(e)=>setEstado(e.target.value)} name="estados-brasil">
	<option value="AC">Acre</option>
	<option value="AL">Alagoas</option>
	<option value="AP">Amapá</option>
	<option value="AM">Amazonas</option>
	<option value="BA">Bahia</option>
	<option value="CE">Ceará</option>
	<option value="DF">Distrito Federal</option>
	<option value="ES">Espírito Santo</option>
	<option value="GO">Goiás</option>
	<option value="MA">Maranhão</option>
	<option value="MT">Mato Grosso</option>
	<option value="MS">Mato Grosso do Sul</option>
	<option value="MG">Minas Gerais</option>
	<option value="PA">Pará</option>
	<option value="PB">Paraíba</option>
	<option value="PR">Paraná</option>
	<option value="PE">Pernambuco</option>
	<option value="PI">Piauí</option>
	<option value="RJ">Rio de Janeiro</option>
	<option value="RN">Rio Grande do Norte</option>
	<option value="RS">Rio Grande do Sul</option>
	<option value="RO">Rondônia</option>
	<option value="RR">Roraima</option>
	<option value="SC">Santa Catarina</option>
	<option value="SP">São Paulo</option>
	<option value="SE">Sergipe</option>
	<option value="TO">Tocantins</option>
</S.Select>
                  </div>
                  <div>
                  <S.Label>Cidade <span>*</span></S.Label>
                  <S.Input onChange={(e)=>setCidade(e.target.value)}/>
                  </div>
                  <div>
                      <S.Label>Endereço <span>*</span></S.Label>
                  <S.Input onChange={(e)=>setEnd(e.target.value)}/>
                  </div>
            </S.FormBlock>


                 
                    <button onClick={()=>setNext(true)}>Próximo</button>

              </S.Form>)
}
                    </S.AdicionarEndereço>
):(
    <S.TabelaEndereço>
        <h3>Lista de Endereços</h3>
        <S.Lista>
            {
                lista===0?(
                    <S.CaixaVazia>
                        <h4>Nenhum endereço foi adicionado</h4>
                        </S.CaixaVazia>
                ):(
                    <>
                    <ListaEndereço dados={dados} />
                    <Link to='/delivery'>
                    </Link>
                    </>
                )
            }
        </S.Lista>
        </S.TabelaEndereço>
)}
        </S.Endereço>
        <MenuMobile></MenuMobile>

        </>
    )
}