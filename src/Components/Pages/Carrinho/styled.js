import styled from "styled-components";

// Meu carrinho de compras
export const Header = styled.div`
    padding: 10px 10px;
    background-color: #333333;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
`;
export const CartIcon= styled.img`
    margin: 0 10px;
`;

// Div que vai organizar o div dos item e o div do resumo
export const ItemResu=styled.div`
    display: flex;
    flex-direction: row;
`;

// Area onde esta o pneu, seu nome e preço e entre outras
export const ItemArea= styled.div`
    display: flex;
    background-color: white;
    margin: 1rem 5rem;
    width:45vw ;
    padding: 20px 20px;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    @media(max-width: 880px) {
        margin: 1rem 1rem;
    flex-direction: column;
    align-items: center;
    width: auto;
  }
   
  
`;
// Imagem do pneu
export const Pneu= styled.img`
    width: 14rem;
    max-width: 9rem;
    margin: 0 auto;
    
`;
// Area onde esta a descrição, ao lado da foto do pneu
export const Description =styled.div`
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    @media(max-width: 930px) {
        margin: 10px 0px;
    }
    
`
// Pneu com marca e id
export const itemInfo=styled.div`
`;
// Info sobre o pneu e o icone de lixeira
export const InfoIcon=styled.div`
    display: flex;
    flex-direction: row;
`;
export const Info =styled.p`
    font-size: 1.4rem;

`;
export const CodeBrand=styled.div`
    display: flex;
 
    margin: 20px auto;
    
`;
export const Brand= styled.img`
    width: 8rem;
    margin:0 20px;
`
export const Code=styled.p`
    font-size: 1.4rem;
    margin:0 auto;
    color: gray;
`

// Quantidade e preço

export const QuantPreço=styled.div`
display: flex;
flex-direction: row;
margin: 0 20px;
`;
// Quantidade
export const QuantArea=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0  2rem 0 0;
    width: 4rem;
`;
export const Label=styled.label`
    font-size: 1.3rem;
    font-weight: bold;
`;
export const Quant=styled.select`
    width: 5rem;
    padding: 6px 10px;
    
`;
// Preço
export const PreçoArea=styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items: flex-start;
    margin: 0 auto;

`;
export const Preço= styled.p`
    font-size: 2rem;
    font-weight: 900;
    color: #88ac02;
    @media(max-width: 930px) {
        font-size: 1.4rem;
    }
`;


// -------------------------------------------------------------------------------

// Area do Resumo onde mostrar o total de todos os pneus selecionados

export const resumoArea= styled.div`
    background-color: white;
    display: flex;
    flex-direction:row;
    width: 45vw;
`;

export const TitleItem=styled.div`
    display:flex;
    flex-direction: column;
`;