import Pneu from './PneuCard'
import { useEffect,useState } from "react";
import { Api } from "../../../Components/Api/Api"
export default function PneuList(){
    const[pneucard,setPneu]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
      async function fetchApi(){
        let response= await Api.buildApiGetRequest(Api.readAllUrl())
        .catch(
          (e)=>{
            console.error(
              'erro',
              e
            );
          }
        );
        response=await response.json();
        setPneu(response)
        setLoading(false)

      }
      fetchApi()
    },[])
    return(
        <>
        {
          loading ?(
            'Carregando'
          ):(
            <>
              <Pneu pneu={pneucard.results} key={pneucard.results[0].productID}></Pneu>
            </>
          )
        }
        </>
    )
}