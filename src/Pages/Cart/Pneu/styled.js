import styled from "styled-components";

export const ItemArea= styled.div`
    display: flex;
    background-color: white;
    margin: 0rem auto;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    flex-direction:row;
    border-bottom: 2px solid #4E008B;
  @media(max-width: 800px) {
   box-shadow: none;
   border-bottom: 2px solid #4E008B;
   flex-direction: column;
   max-width:auto ;
   justify-content: center;
   align-items: center;
   width: auto;
  }
   
  
`;
export const Items=styled.div`
    display: flex;
    flex-direction: column;
`;


   
   
  


// Imagem do pneu
export const Pneu= styled.img`
    width: 14rem;
    max-width: auto;
    margin: 0 30px;
    padding: 1.6rem 0rem;
 
`;
// Area onde esta a descrição, ao lado da foto do pneu
export const Description =styled.div`
    margin: 10px auto;
    display: flex;
    padding: 0 5.5px;
    flex-direction: column;
  
`
// Pneu com marca e id
export const itemInfo=styled.div`
margin: 0 auto;
`;
// Info sobre o pneu
export const InfoArea=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  
    i{  
        display: flex;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 50px;
        height: 50px;
        margin: 1vh 2vw;
        transition: 400ms linear;
        :hover{
            color: white;
        background-color:  #4E008B;

        }
    }
    @media(max-width:1120px){
        margin: 0 auto;
        width: 80%;
        }
`;
export const Info =styled.p`
    font-size: 1.5rem;
    border-bottom: 2px solid darkgray;
    width: 100%;
    padding: 10px 10px;
    
    @media(max-width:1230px){
        width: auto;
        font-size: 1.2rem;
    }

`;
export const CodeBrand=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    margin: 20px auto;
    @media(max-width:1200px){
        margin: 10px auto;
    }
   
    
`;
export const Brand= styled.img`
    width: 10rem;
    margin:0 5vw;
    @media(max-width:800px){
        width: 8rem;
        margin: 10px auto;
    }
`
export const Code=styled.p`
    font-size: 1.5rem;
    margin:0 4vw;
    color: gray;
    @media(max-width:800px){
        font-size:1.3rem;
        margin: 10px auto;
    }
`

// Quantidade e preço

export const QuantPreço=styled.div`
display: flex;
flex-direction: row;
margin: 10px auto;
align-items: center;
@media(max-width:400px){
        margin: 0 auto;
        justify-content: center;
        align-items: center;

    }
`;
// Quantidade
export const QuantArea=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    @media(max-width:800px){
        margin: 0 auto;
    }
`;
export const Label=styled.label`
    font-size: 1.3rem;
    font-weight: bold;
    @media(max-width:1000px){
        font-size: 1.2rem;
    }
   
`;
export const Quant=styled.div`
   display: flex;
   flex-direction: row;
   border: 2px solid darkgray;
   justify-content: center;
   align-items: center;
   width: 9rem;
   height: 2.8rem;
   margin: 2px 0 0 0;
   background-color: gray;
   border-radius: 20px;
   span{
       font-size: 1.3rem;
    color: white;
       padding: 0px 5px;
   }
   @media(max-width:1000px){
       width: 7rem;
       span{
       font-size: 1.3rem;
    }
   }
    
`;
export const IconLess=styled.button`
    margin: auto auto;
    border:none;
    font-size:1.3rem;
    padding: 5px 15px;
    border-radius:9999px;
    color: white;
    background-color: darkgray;
    :hover{
        background-color: silver;
    }
`;
export const IconPlus=styled.button`
    margin: auto auto;
    border:none;
    font-size:1.3rem;
    padding: 5px 10px;
    border-radius:9999px;
    color: white;
    background-color: darkgray;

    :hover{
        background-color: silver;
    }
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
    color:  #4f0381;
    @media(max-width:1000px){
        font-size: 1.3rem;
    }
   
`;
export const IconTrash=styled.div`
    border-left: 2px solid #4f0381 ;
    margin: 0 auto 0 auto;
    background-color:#555ebd ;
    padding: 8.45rem 1rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition:300ms;
    :hover{
        color: #4f0381 ;
        background-color: #69dcfb;
    }
    
   
   

    @media(max-width:800px){
        border-right: 0px;
        border-top: 2px solid #4f0381 ;
        border-left:none;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
   
        padding-top: 1rem;
        padding-bottom: 1rem;
        background: none;

    }
`;

// -------------------------------------------------------------------------------
export const Vazio=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    text-align: center;

    h1{
        margin:20px auto;
        color:#333333;
        font-size: 30px;
        font-weight: 600;
    }
    p{
        font-size: 18px;
        font-weight: 600;
        color:#333333
    }
`;

export const Cart=styled.img`
    width: 194px;
`;
export const Itens=styled.div`
    display: flex;
    background-color: white;
    border: 5px solid #4f0381;
    flex-direction:column;
    margin: 10px auto auto auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 85vw;
    @media(max-width: 800px) {
        border: none;
        background:none;
    }
`;
