import * as S from './styled';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GPay from '../../Components/img/GPay.png'

export default function Formulario({form}) {
    console.log(form)
  return (
    <div>
        { form===1?(
     <S.Container> 
    <S.BodyForm>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Nome" id="Nome" placeholder="Digite seu nome" />
    </Box>
    
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="CPF do titular do cartão" id="Cpf" placeholder="Digite o CPF do titular" />
    </Box>

    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Número do cartão" id="NumberCard" placeholder="1234 5678 9012 3456" type="number" />
    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '46.8%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Data de Validade" variant="outlined" />
      <TextField id="outlined-basic" label="CVC / CVV" variant="outlined" />
    </Box>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Nome do cartão" id="NameCard" placeholder="Digite o nome do cartão" />
    </Box>
    </S.BodyForm>
    </S.Container>
        ):(
            null
        )
}
{/* ===================================================================================== */}
{ form===2?(
     <S.Container> 
    <S.BodyForm>
  

    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Número do cartão" id="NumberCard" placeholder="1234 5678 9012 3456" type="number" />
    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '46.8%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Data de Validade" variant="outlined" />
      <TextField id="outlined-basic" label="CVC / CVV" variant="outlined" />
    </Box>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Nome do cartão" id="NameCard" placeholder="Digite o nome do cartão" />
    </Box>
    </S.BodyForm>
    </S.Container>
        ):(
            null
        )
}
{/* =========================================================================== */}



{ form===3?(
     <S.Container> 
    <S.BodyForm>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Nome" id="Nome" placeholder="Digite seu nome" />
    </Box>
    
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="CPF do titular do cartão" id="Cpf" placeholder="Digite o CPF do titular" />
    </Box>

    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Número do cartão" id="NumberCard" placeholder="1234 5678 9012 3456" type="number" />
    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '46.8%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Data de Validade" variant="outlined" />
      <TextField id="outlined-basic" label="CVC / CVV" variant="outlined" />
    </Box>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Nome do cartão" id="NameCard" placeholder="Digite o nome do cartão" />
    </Box>
    </S.BodyForm>
    <S.BodyForm>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Nome" id="Nome" placeholder="Digite seu nome" />
    </Box>
    
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="CPF do titular do cartão" id="Cpf" placeholder="Digite o CPF do titular" />
    </Box>

    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Número do cartão" id="NumberCard" placeholder="1234 5678 9012 3456" type="number" />
    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '46.8%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Data de Validade" variant="outlined" />
      <TextField id="outlined-basic" label="CVC / CVV" variant="outlined" />
    </Box>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        marginTop: '12px',
      }}
    >
      <TextField fullWidth label="Nome do cartão" id="NameCard" placeholder="Digite o nome do cartão" />
    </Box>
    </S.BodyForm>
    </S.Container>
    
        ):(
            null
        )
}

{/* ===================================================================================== */}
{ form===4?(
     <S.Container> 
    <S.BodyForm>
  

    <S.Text>Você escolheu pagar com o Boleto</S.Text>
    <S.Subtext>Por favor, clique no botão abaixo.</S.Subtext>
    
    </S.BodyForm>
    </S.Container>
        ):(
            null
        )
}
{ form===5?(
     <S.Container> 
    <S.BodyForm>
  

    <S.Text>Você escolheu pagar com o Pix</S.Text>
    <S.Subtext>Por favor, clique no botão abaixo.</S.Subtext>
    
    </S.BodyForm>
    </S.Container>
        ):(
            null
        )
}
{ form===6?(
     <S.Container> 
    <S.BodyForm>
  

    <S.Text>Você escolheu pagar com o Boleto</S.Text>
    <S.Subtext>Por favor, clique no botão abaixo.</S.Subtext>
    <S.ButtonGoogle>Compre com o <img src={GPay} alt=''/> </S.ButtonGoogle>
    </S.BodyForm>
    </S.Container>
        ):(
            null
        )
}
    </div>
  );
}