import styled from "styled-components";

// Meu carrinho de compras
export const Header = styled.div`
    padding: 10px 10px;
    background-color: #69dcfb;
    display: flex;
    color: #5e0796;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
`;
export const CartIcon= styled.img`
    margin: 0 10px;
    width: 3.5rem;
    color:#5e0796;
`;

// Div que vai organizar o div dos item e o div do resumo
export const Itens=styled.div`
    display: flex;
    border:10px solid #4f0381 ;
    flex-direction:column;
    margin: 10px auto;
    border-radius: 10px;
    width: 95vw;
    @media(max-width: 930px) {
        display: flex;
        flex-direction: column;
    }
`;

// Area onde esta o pneu, seu nome e preço e entre outras
export const ItemArea= styled.div`
    display: flex;
    background-color: white;
    margin: 1rem auto;
    width:90vw ;
    box-shadow: 0px 0px 10px gray;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    @media(max-width: 1070px) {
        margin: 1rem 1rem;
    flex-direction: column;
    align-items: center;
    width: auto;
    max-width: 90vw;
  }
   
  
`;
export const Items=styled.div`
    display: flex;
    flex-direction: column;
`;

export const NumberItem=styled.div`
    padding: 3.8rem 2rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius:10px;
    color: #4f0381;
    background-color: #69dcfb;
    border-right:2px solid #4f0381;
    span{
        font-size: 3rem;
    }
`;

// Imagem do pneu
export const Pneu= styled.img`
    width: 14rem;
    max-width: 8.5rem;
    margin: 0 4rem;
    padding: 1.6rem 0rem;
    
`;
// Area onde esta a descrição, ao lado da foto do pneu
export const Description =styled.div`
    margin: 10px 5rem;
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
export const InfoArea=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    @media(max-width:880px){
        margin: 0 auto;
    }
`;
export const Info =styled.p`
    font-size: 1.6rem;

`;
export const CodeBrand=styled.div`
    display: flex;
 
    margin: 10px auto;
    
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
   border: 1px solid black;
   justify-content: center;
   align-items: center;
   width: 8rem;
   border-radius: 20px;
   span{
       padding: 5px 10px;
       border-left: 1px solid black;
       border-right:1px solid black;
   }
    
`;
export const IconPlusLess=styled.button`
    margin: auto auto;
    border:1px solid black;
    padding: 5px 15px;
    border-radius:9999px;
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
    font-size: 1.8rem;
    font-weight: 900;
    color: #88ac02;
    @media(max-width: 920px) {
        font-size: 1.6rem;
    }
`;
export const IconTrash=styled.div`
    border-left: 2px solid #4f0381 ;
    margin: 0 auto;
    background-color:#555ebd ;
    padding: 5.1rem 1.8rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition:300ms;
    :hover{
        border-left: 2px solid #4f0381 ;
        color: #4f0381 ;
        background-color: #69dcfb;
    }
`;

// -------------------------------------------------------------------------------

export const CepCuponsResu=styled.div`
display: flex;
background-color: gray;
box-shadow: -10px 10px 10px black;
flex-direction: row;
`;

export const CuponsCep= styled.div`
    background-color: white;
    width: 30rem;
    height: 10rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 20px;

`;

export const CupomArea=styled.div`
    display: flex;
    flex-direction: row;

    i{
        margin: 0 6rem;
    }
`;
export const CuponsTitle=styled.p`
    display: flex;
    width: 20rem;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
    img{
        margin: 0 10px;
        width: 4rem;
    }
`;

export const CepArea=styled.div`
 display: flex;
    flex-direction: row;

    i{
        margin: 0 6rem;
    }
`
export const CepTitle=styled.p`
  display: flex;
    width: 20rem;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
    img{
        margin: 0 10px;
        width: 2rem;
    }
`;


// Area do Resumo onde mostrar o total de todos os pneus selecionados
export const ResuButtons=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0rem;
`

export const resumoArea= styled.div`
    background-color: white;
    display: flex;
    flex-direction:column;
    width: 30vw;
    padding: 20px 0 0 0px;
    border-radius: 10px;
    @media(max-width: 930px) {
        width:90vw;
        margin: 20px auto;
        position: initial;
    }
    
`;

export const Resumo =styled.div`
    display: flex;
    padding: 0px 30px ;
    flex-direction: column;
`;
// Primeira linha do resumo
export const TitleIconArea=styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin: 0 auto;
@media(max-width: 550px) {
    margin:0 auto 0 auto;
    display: flex;
    flex-direction: column-reverse;
}
`
export const TitleItem=styled.div`
    display:flex;
    flex-direction: column;
    margin: 0 auto 0 0;
`;

export const Title=styled.h1`
    width: 15rem;
    color:#393939;
    font-size: 1.7rem;
`;
export const SubTitle=styled.p`
    font-weight: inherit;
    color: gray;
`;
export const IconBag=styled.img`
    width: 5rem;
    height: 5rem;
    margin: 0 0 0 auto;
    @media(max-width: 930px) {
        margin: 0 auto;
    }
`;
// ----------------

// Segunda linha do resumo

export const Title2Subtotal=styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid darkgray;
    padding: 20px 0;
    color:#323232;
`;
export const Title2=styled.h3`
    margin: 0 auto 0 0;
    font-weight: 100;
    
`;
export const Subtotal=styled.p`
    margin: 5px 0 0 auto ;
    font-weight: 100;
`;
// ----------
// Terceira linha do resumo
export const Title3total=styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 30px;
    height:8rem;
    border-bottom-left-radius:10px;
    border-bottom-right-radius: 10px;
    background-color: #f8f8f8;
    color:#323232;
`;
export const Title3=styled.h2`
    margin: 0 auto 0 0px;
    font-weight: 100;
`;

export const TotalsubTotal= styled.div`
    display: flex;
    flex-direction: column;
    width: 41rem;
`;
export const PreçoTotal= styled.h4`
   font-size: 1.8rem;
   text-align: right;
    font-weight: 100;
    color: #88ac02;
    @media(max-width: 930px) {
        font-size: 1.4rem;
    }
`;
export const SubPreçoTotal=styled.p`
    text-align: right;
    margin: 0 0 0 auto;
    width: 13rem;
    b{
        color:#595959;
    }
`;

// -----------------------------------------------

// Inserindo os botoes para a compra

export const ButtonsArea= styled.div`
    display: flex;
    flex-direction: column;
    margin:0px auto;
    @media(max-width: 930px) {
        margin: 0 auto;
    }
`;
export const ContFinal=styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px auto 10px auto;
    @media(max-width: 430px) {
        flex-direction: column;
        margin: 50px auto;
    }
`
export const Continuar=styled.button`
    padding: 15px 20px;
    font-size: 1rem;
    margin: 0 10px;
    cursor: pointer;
    font-weight: bolder;
    color:#323232;
    @media(max-width: 1030px) {
        padding: 20px 10px;
        margin: auto 20px 0 20px;
    }
`;
export const Finalizar=styled.button`
    padding: 15px 10px;
    font-size: 1rem;
    display: flex;
    cursor:pointer;
    background-color: #8aab04;
    border:2px solid #8aab04;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    color:white;
    i{
        margin: 0 10px;
    }
    @media(max-width: 430px) {
        padding: 10px 10px;
        margin: 10px 20px 0 20px;
        font-size: 1rem;
        flex-direction: column;
    }
    `;
    export const Limpar= styled.button`
        width: 80%;
        font-size: 1rem;
        font-weight: bolder;
        color:#323232;
        margin: 0 auto 0 auto;
        background:none;
        border:none;
        cursor:pointer;
        padding: 10px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        i{
            margin: auto 20px;
        }

        @media(max-width: 530px) {
        margin: 10px auto;
        color: white;
        width:80%;
        border-radius: 10px;
        background-color: darkred;
        border:2px solid red;
    }
    `;