import GerarPneu from './Produto/GeraPneu'
import * as S from './styled'
import { useState,useEffect } from 'react'
import { Api } from '../../Api/Api'
export default function Resumo(){
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
    console.log(itens)
   
    
    return(
        <S.ResuItens>
        <S.Item>
          {loading?(
            null
          ):(
            <>
            {itens.map((item,index)=>(
      <GerarPneu key={index} itemID={item.productId} quant={item.quantity}></GerarPneu>
            ))
            }
            </>
          )

          }
        </S.Item>
    <S.resumoArea>
    <S.Resumo>
      <S.TitleIconArea>
        <S.TitleItem>
          <S.Title>Resumo do pedido</S.Title>
          <S.SubTitle>
            <span>1</span> itens no seu carrinho
          </S.SubTitle>
        </S.TitleItem>
        <S.IconBag
          alt="bag-icon"
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-bag-check-2992557-2486732.png"
        />
      </S.TitleIconArea>
      <S.Title2Subtotal>
          <div>
        <S.Title2>Subtotal</S.Title2>
        <S.Subtotal>R$ 850,96</S.Subtotal>
        </div>
        <div>
        <S.Title2>Frete</S.Title2>
        <S.Subtotal>R$ 850,96</S.Subtotal>
        </div>
      </S.Title2Subtotal>
    </S.Resumo>
    <S.Title3total>
  <S.Title3>Total</S.Title3>
  <S.TotalsubTotal>
    <S.PreçoTotal>R$ 850,96</S.PreçoTotal>
    <S.SubPreçoTotal>
      ou <b>R$ 765,86 à vista</b> no{" "}
      <b>cartão de débito ou via PIX</b>
    </S.SubPreçoTotal>
  </S.TotalsubTotal>
</S.Title3total>
</S.resumoArea>
</S.ResuItens>
    )
}