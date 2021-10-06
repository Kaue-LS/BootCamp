import { NavBarTerciaria } from "../../Components/NavBar/NavBar"
import * as S from './styled'
import Box from '../../Components/img/Box.jpg'
import CustomizedSteppers from "../../Components/Stepper/Stepper"
import { useState } from "react"
import { maskCEP } from "../../Components/Mask/Mask"
import ListaEndereço from "./ListaEnder"
export default function Address(){
    const [showAdd,setShowAdd]=useState(false)
    const [next,setNext]=useState(false)
    const [lista,setLita]= useState(0)
    // ====================
    const [nomeEnd,setNomeEnd]=useState('')
    const [cep,setCep] =useState("")

    return(
        <>
        <NavBarTerciaria></NavBarTerciaria>
        <CustomizedSteppers props={1}/>

        <S.Endereço>
            <S.Dados>
            <S.DadosCliente>
                <h3>Dados do cliente</h3>
                <div>
                    <div>
                    <p>Nome:</p> <span>Fulano Ciclano</span>
                    </div>
                    <div>
                    <p>Email:</p> <span>FulanodeTal@gmail.com</span>
                    </div>
                </div>
            </S.DadosCliente>
            <S.EndereçoEntrega>
                <h3>Endereço de entrega</h3>
                <button onClick={()=>setShowAdd(true)}><img src={Box} alt=''/>Adicione o endereço</button>
                </S.EndereçoEntrega>
            </S.Dados>
{  showAdd?(          
                <S.AdicionarEndereço>
{   next?(
    <S.Form>
        <S.Header>
        <i onClick={()=>setShowAdd(false)} class="im im-x-mark-circle-o"></i>
        <h3>Preenche o formulario:</h3>
        </S.Header>
    <S.FormBlock>
       <div>
       <S.Label>Número <span>*</span></S.Label>
       <S.Input/>
       </div>
       <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
         <S.Checked  type='checkbox'/> <p style={{margin:'10px 10px'}}>Sem Número</p>
         </div>
         <div>
         <S.Label>Complemento (Opcional)</S.Label>
         <S.Input/>
         </div>
         <div>
         <S.Label>Bairro <span>*</span></S.Label>
         <S.Input/>
         </div>
         <div>
         <S.Label>Ponto de referência (Opcional)</S.Label>
         <S.Input/>
         </div>
         <div style={{display:'flex',flexDirection:'row-reverse'}}>
         <button>Adicionar</button>
         <button onClick={()=>setNext(false)}>Voltar</button>
         </div>
         </S.FormBlock>
         </S.Form>
):(
                  <S.Form>
                  <S.Header>
        <i onClick={()=>setShowAdd(false)} class="im im-x-mark-circle-o"></i>
        <h3>Preenche o formulario:</h3>
        </S.Header>
        <S.FormBlock>
                  <div>
                  <S.Label>Nome do Endereço <span>*</span></S.Label>
                  <S.Input/>
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
                  <S.Input/>
                  </div>
                  <div>
                  <S.Label>Cidade <span>*</span></S.Label>
                  <S.Input/>
                  </div>
                  <div>
                      <S.Label>Endereço <span>*</span></S.Label>
                  <S.Input/>
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
                    <ListaEndereço />
                )
            }
        </S.Lista>
        </S.TabelaEndereço>
)}
        </S.Endereço>
        </>
    )
}