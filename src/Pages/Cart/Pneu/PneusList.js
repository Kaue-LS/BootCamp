import * as S from "./styled";
import {  useState,useEffect } from "react";
import { Api } from "../../../Api/Api";
export default function PneusList({pneu}) {
  const [pneucard,setPneu]=useState([])
  const [loading,setLoading]=useState(false)
  const [ID,setID]=useState([pneu])
  console.log(ID)
  useEffect(() => {
    if (!loading) {
      fecthApi();
    }
  });

  const fecthApi = async (id) => {
    const response =await Api.buildApiRequest(Api.ReadProductID(ID))
    const result= await response.json()
    setPneu(result)
    setLoading(true)
    
  };
  console.log(pneucard)


  return (
    <>
          { /* Pneu escolhido */}
          <S.ItemArea>
        
      
      </S.ItemArea>
      </>
  );
}
