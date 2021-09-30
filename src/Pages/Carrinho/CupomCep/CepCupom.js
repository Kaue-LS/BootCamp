import { useState } from "react";
import * as S from './styled'
import Cep from '../../../Components/img/cep.jpg'
import Cupom from '../../../Components/img/cupon.jpg'
export default function CepCupom (){
  const [Cupomtext,setCupom]= useState('')
  const [Ceptext,setCep]=useState('') 
  
 
  // const SetCep=(props)=>{
  //   let cep=/[0-9]/
  //   var Cep=props
  //   cep.match(Cep)
  //   console.log(cep)
    
  // }
  
console.log(Ceptext)

    const [ShowCupom, setShowCupom]=useState(false);
  const [ShowCep, setShowCep]=useState(false);
      const MostrarCupom=(props)=>{
        setShowCupom(props)
      }
  
      const MostrarCep=(props)=>{
        setShowCep(props)
      }
    return(
        <S.CuponsCep>
          
        { ShowCupom?(
          <S.CupomArea >
          <S.CuponsTitle><img src={Cupom} alt='cupom'/>Cupom de desconto</S.CuponsTitle>
          <i className="im im-angle-down" onClick={()=>MostrarCupom(false)} ></i>

        <S.ShowCupom>
          <S.CupomBar value={Cupomtext} onChange={props=>setCupom(props.target.value)} placeholder='INSIRA O CUPOM DE DESCONTO'></S.CupomBar><S.CupomButton>APLICAR</S.CupomButton>
        </S.ShowCupom>
        </S.CupomArea>
        ):(
          <S.CupomArea onClick={()=>MostrarCupom(true)} >

          <S.CuponsTitle><img src={Cupom} alt='cupom' />Cupom de desconto</S.CuponsTitle>
          <i className="im im-angle-up"></i>
          </S.CupomArea>
        )
        }


        

        {
          ShowCep?(
            <S.CepArea  >
        <S.CepTitle><img src={Cep} alt='cep'/>Informe seu CEP</S.CepTitle>
        <i className="im im-angle-down"onClick={()=>MostrarCep(false)}></i>
        <S.ShowCep>
          <S.CepBar value={Ceptext} onChange={props=>setCep(props.target.value)} type='text' name="numbers"  />
          <S.CepButton>CALCULAR ENTREGA</S.CepButton>
          <a rel="noreferrer" href='https://buscacepinter.correios.com.br/app/endereco/index.php' target='_blank'>Não sei o meu CEP</a>
        </S.ShowCep>
        </S.CepArea>
          ):(
            <S.CepArea onClick={()=>MostrarCep(true)}>
            <S.CepTitle><img src={Cep} alt='cep'/>Informe seu CEP</S.CepTitle>
            <i className="im im-angle-up"></i>
            </S.CepArea>
          )
        }
       

      </S.CuponsCep>
    )
}