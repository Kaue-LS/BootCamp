import Pneu from "./PneuCard";
import { ApiGet } from "../../../Components/Api/Api";
import{ useEffect, useState } from "react";
export default function PneuList() {
  const [pneucard, setPneu] = useState([])
  const [loading,setLoading]= useState(true)
  useEffect(()=>{
    if(loading){
      fecthApi()
    }
  })
 
  const fecthApi=()=>{
    ApiGet.get('/Produto')
    .then(res=>{
      const pneu=res.data
      setPneu(pneu.results)
      setLoading(false)
      console.log(pneucard)
  })}

  
    
  return (
    <>
      {loading?(
         "Carregando"
       
          ):(
            pneucard.map((item,index)=>(
              <Pneu pneu={item} key={index}></Pneu>    
          )))
               }
    </>
  );
}
