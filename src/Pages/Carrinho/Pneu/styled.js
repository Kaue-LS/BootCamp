import styled from "styled-components";

export const ItemArea= styled.div`
    display: flex;
    background-color: white;
    margin: 1rem auto;
    width:50vw ;
    box-shadow: 0px 0px 20px gray;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  @media(max-width: 800px) {
   box-shadow: none;
   flex-direction: column;
   max-width:auto ;
   width: auto;
  }
   
  
`;
export const Items=styled.div`
    display: flex;
    flex-direction: column;
`;

export const NumberItem=styled.div`
    padding: 7.5rem 1rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius:10px;
    color: #4f0381;
    background-color: #69dcfb;
    border-right:2px solid #4f0381;
    span{
        font-weight: 600;
        font-size: 3rem;
    }
   
   
  
    @media(max-width:800px){
        border-right: 0px;
        border-bottom: 2px solid #4f0381 ;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    border-bottom-left-radius: 0px;
    padding-left:2vmax ;
        padding-right: 2vmax;        
        padding-left:22.2vmin ;
        padding-right: 23.2vmin;        
        padding-top: 1rem;
        padding-bottom: 1rem;
        background: none;
    }
`;

// Imagem do pneu
export const Pneu= styled.img`
    width: 14rem;
    max-width: 9rem;
    margin: 0 auto;
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
`;
// Info sobre o pneu
export const InfoArea=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    border-bottom: 2px solid darkgray;
  
    @media(max-width:1120px){
        margin: 0 auto;
        width: 80%;
        }
`;
export const Info =styled.p`
    font-size: 1.6rem;
    
    @media(max-width:1230px){
        width: auto;
        font-size: 1.2rem;
    }

`;
export const CodeBrand=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    @media(max-width:1200px){
        margin: 10px auto;
    }
    @media(max-width:400px){
        flex-direction: column;
    }
    
`;
export const Brand= styled.img`
    width: 8rem;
    margin:0 auto;
    @media(max-width:800px){
        margin: 10px auto;
    }
`
export const Code=styled.p`
    font-size: 1.3rem;
    margin:0 auto;
    color: gray;
`

// Quantidade e preço

export const QuantPreço=styled.div`
display: flex;
flex-direction: row;
margin: 0 40px;
align-items: center;
@media(max-width:400px){
        flex-direction: column;
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
    margin: 0  7rem 0 1rem;
    width: 0;
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
   height: 3.2rem;
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
    font-size:1.5rem;
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
    font-size:1.5rem;
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
    padding-left:2vmax ;
        padding-right: 2vmax;        
        padding-left:23.5vmin ;
        padding-right: 23.5vmin;        
        padding-top: 1rem;
        padding-bottom: 1rem;
        background: none;

    }
`;

// -------------------------------------------------------------------------------


