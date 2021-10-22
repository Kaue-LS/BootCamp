import * as S from './styled'
import {Api} from '../../../Api/Api'
import { useState,useEffect } from 'react'
export default function GerarPneu(props){
    const [itens,setItens]=useState([])
    const [loading,setLoading]=useState(true)
    const [id]=useState(props.itemID)
    useEffect(()=>{
        if(loading){
            FetchApi()
        }
    })
    const FetchApi= async()=>{
        const response =await Api.buildApiRequest(Api.ReadProductID(id))
        const res= await response.json()
        setItens(res)
        setLoading(false)
    }
    console.log(itens)
    return(
        <S.ItemPedido>
      
        {loading?(
            null
        ):(
            <S.Items>
            <span>{props.quant}</span>
            <img src={itens.imagePath} alt=''></img>
            <h3>{itens.productName}</h3>
            <p>{(itens.unitPrice).toFixed(2)}</p>
            </S.Items>
        
        )
    }
        </S.ItemPedido>

    )
}