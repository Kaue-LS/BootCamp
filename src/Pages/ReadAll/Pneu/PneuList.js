import Pneu from "./PneuCard";
import { useEffect, useState } from "react";
import { Api } from "../../../Components/Api/Api";
export default function PneuList() {
  const [pneucard, setPneu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetchApi();
    }
  });
  const fetchApi = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllUrl());

    const dados = await response.json();

    setPneu(dados.results);
    setLoading(false);
  };
  return (
    <>
      {
        pneucard.length>0?(
          (pneucard.map((item,index)=>(
            <Pneu pneu={item} key={index}></Pneu>
          )))
        ):(
          'Carregando...'
        )
      }
    </>
  );
}
