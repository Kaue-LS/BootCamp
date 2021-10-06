import { useState } from "react";
import * as S from './styled'
import Cep from '../../../Components/img/cep.jpg'
import Cupom from '../../../Components/img/cupon.jpg'
import InputMask from 'react-input-mask'
export default function CepCupom (){
  const [Cupomtext,setCupom]= useState('')
  const [Ceptext,setCep]=useState('') 
  

   // const [cep, setCep] = useState([]);
  // const numCep = Number;
  // const buscaCep = () => {
  //   fetch(`http://viacep.com.br/ws/03542040/json/ `)
  //     .then((res) => res.json())
  //     .then((rescep) => {
  //       setCep(rescep);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   buscaCep();
  // });
  
 
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
          <S.IconActive className="im im-angle-down" onClick={()=>MostrarCupom(false)} ></S.IconActive>

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
        <S.IconActive  className="im im-angle-down"onClick={()=>MostrarCep(false)}></S.IconActive>
        <S.ShowCep>
          <InputMask className='inputmask' mask='99999-999' value={Ceptext} onChange={props=>setCep(props.target.value)} type='text' name="numbers"  />
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