import * as S from './styled'
import Van from '../../../Components/img/Van.jpg'
import Casa from '../../../Components/img/casa.jpg'
import Montagem from '../../../Components/img/Montagem.jpg'
import { useState } from 'react'

export default function Entrega(){
    const [option,setOption]=useState(0);

    const MoverBarra=(props)=>{
        
        if(props===1){
            setOption(props)
            document.getElementById('Barra').style=`
            margin:0 0 0 -140%;
            transition:400ms;

            `
        }
        if(props===2){
            setOption(props)

            document.getElementById('Barra').style=`
            margin:0 00% 0 15%;
            transition:400ms;

            `
        }
        if(props===3){
            setOption(props)

            document.getElementById('Barra').style=`
            margin:0 0 0 170%;
            transition:400ms;
            `
        }
    }
// 0 0 0 -160%
// 0 170% 0 0
// 0 0 0 170%
    return(
        <S.MetodoEntrega>
            <S.OptionsBarra>
            <S.OptionsArea>
                <S.Option1 onClick={()=>MoverBarra(1)} value={1}><img src={Van} alt=''></img></S.Option1>
                <S.Option2 onClick={()=>MoverBarra(2)}  value={2}><img src={Montagem} alt=''></img></S.Option2>
                <S.Option3 onClick={()=>MoverBarra(3)}  value={3}><img src={Casa} alt=''></img></S.Option3>
            </S.OptionsArea>
            <S.BarraArea id='Barra'>
            </S.BarraArea>

                {
                    option===1?(
                        "ooooo"
                    ):(
                        null
                    )
                }
                 {
                    option===2?(
                        "bbbbb"
                    ):(
                        null
                    )
                }
                 {
                    option===3?(
                        "ccccc"
                    ):(
                        null
                    )
                }

            </S.OptionsBarra>
        </S.MetodoEntrega>
    )
}