import * as S from './styled'
import { Api } from '../../Api/Api'
import { useState,useEffect } from 'react'
import MenuMobile, { } from '../../Components/MenuMobile/MenuMobile'
import CustomizedSteppers from '../../Components/Stepper/Stepper'
import { NavBarQuaternária} from '../../Components/NavBar/NavBar'
import Produtos from './Produtos/Produtos'
import Endereço from './Endereço/Endereço'
import Resumo from './Resumo/Resumo'
import { Link } from 'react-router-dom'
export default function ResumoPagamento(){
    const [itens,setItens]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        if(loading){
            FetchApi()
        }
    })
    const FetchApi=async()=>{
        const response = await Api.buildApiRequest(Api.SelectedTires())
        const res=await response.json()
        setItens(res)
        setLoading(false)
    }

    return(
    <>
    <NavBarQuaternária location={'/payment'}></NavBarQuaternária>
    <CustomizedSteppers props={4}></CustomizedSteppers>
    <S.Resumo>
        <S.Header>
        <i class="im im-check-mark"></i>
        <h1>Compra realizada com sucesso!</h1>
        </S.Header>
        <S.Number>
            <h2>O número do pedido é:</h2>
            <span>67296334</span>
        </S.Number>
        <S.Email>
        <i class="im im-mail"></i>
            <h2>Foi enviado para <span>EmaildoUsuario@gmail.com</span> todo os detalhes do pedido. </h2>
            <p>Você pode acompanhar seu pedido acessando sua conta <span>aqui</span></p>
        </S.Email>
        <S.Calendar>
        <i class="im im-date-o"></i>
        <p>A data de entrega do seu pedido, conta a partir do momento da confirmação e liberação do pagamento</p>
        </S.Calendar>

        <S.Button>Visualizar Boleto</S.Button>
      
    </S.Resumo>
    <S.ProdutosArea>
        <S.Title>ITENS DO PEDIDO</S.Title>
    { loading?(
        null
    ):(
       <>
     {itens.map((item,index)=>   
    <Produtos itemID={item.productId} quant={item.quantity} key={index}></Produtos>
     )}
     </>
    )
    }
    </S.ProdutosArea>
    <S.EndereçoArea>
        <Endereço></Endereço>
        </S.EndereçoArea>
    <S.ResumoArea>
        <Resumo></Resumo>
    </S.ResumoArea>
<Link style={{textDecoration:'none',margin:'0 10%'}} to='/'>
    <S.Voltar >
        Voltar ao início
    </S.Voltar>
</Link>
    <MenuMobile></MenuMobile>
    </>
    )
}