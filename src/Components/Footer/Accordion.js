import * as React from 'react';
import { AccordionActions } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as S from "./styled";

export default function SimpleAccordion() {
  return (
    <div>
    <S.Accordion>
    <AccordionActions> 
      <Accordion style={{backgroundColor:"#252031",
    color:"#ffffff"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography width="70vw"><strong>INSTITUCIONAL</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Garantia</Typography>
          <Typography>Política de Privadidade</Typography>
          <Typography>Regras do site</Typography>
          <Typography>Trabalhe Conosco</Typography>
          <Typography>Marcas</Typography>
        </AccordionDetails>
      </Accordion>
      </AccordionActions>
      </S.Accordion>
      <S.Accordion>
    <AccordionActions> 
      <Accordion style={{backgroundColor:"#252031",
    color:"#ffffff"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography width="70vw"><strong>AJUDA</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Perguntas frequentes</Typography>
          <Typography>Entrega</Typography>
          <Typography>Troca e desistência</Typography>
          <Typography>Meus pedidos</Typography>
          <Typography>Informações técnicas</Typography>
        </AccordionDetails>
      </Accordion>
      </AccordionActions>
      </S.Accordion>
      <S.Accordion>
    <AccordionActions> 
      <Accordion style={{backgroundColor:"#252031",
    color:"#ffffff"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography width="70vw"><strong>SERVIÇO</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Entregas e montagem móvel</Typography>
          <Typography>Seja um parceiro de serviços</Typography>
        </AccordionDetails>
      </Accordion>
      </AccordionActions>
      </S.Accordion>
      <S.Accordion>
    <AccordionActions> 
      <Accordion style={{backgroundColor:"#252031",
    color:"#ffffff"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography width="70vw"><strong>CENTRAL DE RELACIONAMENTO</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Garantia</Typography>
          <Typography><strong>0800-602-2013</strong></Typography>
          <Typography>(Ligações de telefone fixo - Chamada Gratuita)</Typography>
          <Typography><strong>(47) 3046-2559</strong></Typography>
          <Typography>(Ligações de qualquer origem - Cobrança de Acordo com Operadora)</Typography>
        </AccordionDetails>
      </Accordion>
      </AccordionActions>
      </S.Accordion>
    </div>
  );
}

