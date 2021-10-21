import Pneu from "./PneuCard";
import{ useEffect, useState } from "react";
import  {Api}  from "../../../Api/Api";
export default function PneuList() {
  const [pneucard, setPneu] = useState([])
  const [loading,setLoading]= useState(true)
  useEffect(()=>{
    if(loading){
      ReadTires()
    }
  })
 
  const ReadTires= async()=>{
    const response= await Api.buildApiRequest(Api.ReadProduct())

    const results = await response.json();

    setPneu(results)
    setLoading(false)
  }

  console.log(pneucard)
    
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
