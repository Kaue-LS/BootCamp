import { useState } from "react";
import * as S from './styled'
import Cep from '../../../Components/img/cep.jpg'
import Cupom from '../../../Components/img/cupon.jpg'
import { maskCEP } from "../../../Components/Mask/Mask";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
export default function CepCupom (){
  const [Cupomtext,setCupom]= useState('')
  const [ceptext,setCep]=useState('') 
  

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
  

    return(
        <S.CuponsCep>
         <S.CupomArea style={{borderRadius:'10px'}}> 
         <Accordion>
           <AccordionSummary expandIcon={<ExpandMoreIcon style={{fontSize:'52px'}}></ExpandMoreIcon>}>
          <S.CuponsTitle><img src={Cupom} alt='cupom'/>Cupom de desconto</S.CuponsTitle>
      </AccordionSummary>
      <AccordionDetails>
        <S.ShowCupom>
          <S.CupomBar value={Cupomtext} onChange={props=>setCupom(props.target.value)} placeholder='INSIRA O CUPOM DE DESCONTO'></S.CupomBar>
          <S.CupomButton>APLICAR</S.CupomButton>
          </S.ShowCupom>
        </AccordionDetails>
        </Accordion>
      </S.CupomArea>


        
      <S.CepArea >
      <Accordion >
        <AccordionSummary  expandIcon={<ExpandMoreIcon style={{fontSize:'52px'}} ></ExpandMoreIcon>}>
        <S.CepTitle><img src={Cep} alt='cep'/>Informe seu CEP</S.CepTitle>
        </AccordionSummary>
        <AccordionDetails>
        <S.ShowCep>
        <input
        value={ceptext}
        maxLength="9" className='inputmask'
        onChange={(e) => setCep(maskCEP(e.target.value))}
      />
                <S.CepButton>CALCULAR ENTREGA</S.CepButton>
          <a rel="noreferrer" href='https://buscacepinter.correios.com.br/app/endereco/index.php' target='_blank'>Não sei o meu CEP</a>
        </S.ShowCep>
       </AccordionDetails>
      </Accordion>
      </S.CepArea>

      </S.CuponsCep>
    )
}