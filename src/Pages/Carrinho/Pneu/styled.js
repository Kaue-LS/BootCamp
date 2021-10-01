import styled from "styled-components";

export const ItemArea= styled.div`
    display: flex;
    background-color: white;
    margin: 1rem auto;
    width:90vw ;
    box-shadow: 0px 0px 20px gray;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    @media(max-width: 800px) {
   flex-direction: column;
  }
  @media(max-width: 800px) {
   box-shadow: none;
   max-width:auto ;
  }
   
  
`;
export const Items=styled.div`
    display: flex;
    flex-direction: column;
`;

export const NumberItem=styled.div`
    padding: 6.7rem 2rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius:10px;
    color: #4f0381;
    background-color: #69dcfb;
    border-right:2px solid #4f0381;
    span{
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
        padding-left:43.5vmin ;
        padding-right: 43.5vmin;        
        padding-top: 1rem;
        padding-bottom: 1rem;
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
    margin: 10px 10rem;
    display: flex;
    padding: 0 5.5px;
    flex-direction: column;
    @media(max-width: 930px) {
        margin: 10px 0px;
        padding: 0 30px;
    }
    @media(max-width:1200px){
     margin:10px 5rem ;
    }
    @media(max-width:1000px){
     margin:10px 2rem ;
    }
  
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
    @media(max-width:880px){
        margin: 0 auto;
    }
    @media(max-width:1120px){
        margin: 0 auto;
        }
`;
export const Info =styled.p`
    font-size: 1.6rem;
    
    @media(max-width:980px){
        font-size: 1.4rem;
    }

`;
export const CodeBrand=styled.div`
    display: flex;
 
    margin: 20px 5vw;
    @media(max-width:1200px){
        margin: 30px auto;
    }
    
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
margin: 0 40px;
@media(max-width:980px){
        margin: 0 auto;
    }
`;
// Quantidade
export const QuantArea=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0  7rem 0 1rem;
    width: 4rem;
`;
export const Label=styled.label`
    font-size: 1.3rem;
    font-weight: bold;
   
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
    color: white;
       padding: 0px 5px;
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
    @media(max-width:980px){
        font-size: 1.5rem;
    }
   
`;
export const IconTrash=styled.div`
    border-left: 2px solid #4f0381 ;
    margin: 0 auto 0 auto;
    background-color:#555ebd ;
    padding: 8rem 1.8rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition:300ms;
    :hover{
        color: #4f0381 ;
        background-color: #69dcfb;
    }
    
    @media(max-width:1200px){
        padding-top: 9rem 1.8rem;
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
        padding-left:42.5vmin ;
        padding-right: 42.5vmin;        
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;

// -------------------------------------------------------------------------------


