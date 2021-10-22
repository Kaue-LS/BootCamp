import { useState } from 'react'
import * as S from './styled'
export default function ListaEndereço(dados){
    console.log(dados)
    const [selected,setSelected]= useState(false)
    const Selected=()=>{
        setSelected(true)
        document.getElementById('selected').style='background-color:#EDFAB8;'
    }
    return(
        <>
        <S.CaixaEndereço id='selected'>
              <div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p><i className="im im-location"></i>Kauê</p>
                <input type='radio' name='address' onClick={(e)=>Selected(e.target)}></input>
                </div>
                <div style={{display:'flex',flexDirection:'column',margin:'10px 0'}}>
                <span>Av. Engenheiro Luís Carlos Berrini</span>
                <div style={{display:'flex',flexDirection:'row',margin:'10px 0'}}>
                <span>São Paulo</span>
                <span>São Paulo</span>
                </div>
                <div>
                    <span>Brazil</span>
                    <span>42345543</span>
                    </div>
                </div>
                <i class="im im-pencil"></i>
                </div>
        </S.CaixaEndereço>
        {selected ?(
        <button>Proximo</button>
        ):(
            null
        )
}
        </>

    )
}