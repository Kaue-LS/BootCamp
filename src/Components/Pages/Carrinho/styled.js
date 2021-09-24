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
    @media(max-width: 930px) {
        display: flex;
        flex-direction: column;
    }
`;

// Area onde esta o pneu, seu nome e preço e entre outras
export const ItemArea= styled.div`
    display: flex;
    background-color: white;
    margin: 1rem 2rem;
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
export const Items=styled.div`
    display: flex;
    flex-direction: column;
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
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media(max-width:880px){
        margin: 0 auto;
    }
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
    margin: 0  7rem 0 1rem;
    width: 4rem;
`;
export const Label=styled.label`
    font-size: 1.3rem;
    font-weight: bold;
`;
export const Quant=styled.select`
    width: 5rem;
    margin: 7px 0;
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
    @media(max-width: 920px) {
        font-size: 1.4rem;
    }
`;


// -------------------------------------------------------------------------------

// Colocando Os botoes de cupons e Cep

// Cep
export const CepArea=styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 10px 0px;
    display: flex;
    margin: 10px 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media(max-width: 680px) {
        flex-direction: column;
    }
    
`;
export const TitleCep=styled.h3`
    display: flex;
    flex-direction: row;
    margin: 0px auto;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    img{
        margin: 0px 10px;
    }
    @media(max-width: 920px) {
        font-size: 1.5rem;
    }
`;
export const Cep=styled.input`
    height: 1.8rem;
    width: 11rem;
    margin: 0 10px;
    @media(max-width: 920px) {
        min-width:18rem ;
        margin:10px 0px;
    }
    
`;
export const CepButton=styled.button`
     background-color: #8aab04;
    border:2px solid #8aab04;
    border-radius: 5px;
    color:white;
    padding: 5px 5px;
    font-size: 1rem;
    margin: 0 10px;
`;
// Cupons de desconto
export const CuponsArea=styled.div`
    background-color: white;
    margin: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    flex-direction:row;
    padding: 15px 10px;
    @media(max-width: 680px) {
        flex-direction: column;
    }
`;
export const TitleCupons=styled.h3`
    color:#8aab04;
    font-size: 1.4rem;
    margin: 0 auto 0 auto;
    i{
        margin: 0 20px;
    }
    @media(max-width: 920px) {
        font-size: 1.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;
export const Cupons =styled.input`
    width: 14rem;
    margin: 0 auto 0 auto;
    padding: 5px 0;
    @media(max-width: 920px) {
        width:18rem ;
        margin:10px auto;
    }
    
`;
export const CuponsButton=styled.button`
  background-color: #8aab04;
    border:2px solid #8aab04;
    border-radius: 5px;
    color:white;
    padding: 5px 5px;
    font-size: 1rem;
    margin: 0 10px;
    @media(max-width: 930px) {
        padding: 5px 20px;
        margin: 0 auto 0 0;
    }
`;
// Area do Resumo onde mostrar o total de todos os pneus selecionados
export const ResuButtons=styled.div`
    position: fixed;
    display: flex;
    flex-direction:column;
    margin: 17px 53vw;
    @media(max-width: 930px) {
        width:90vw;
        margin: 0 auto;
        position: initial;
    }
`;
export const resumoArea= styled.div`
    background-color: white;
    display: flex;
    flex-direction:column;
    width: 45vw;
    height: 40vh;
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
    margin: 0 auto;
    @media(max-width: 930px) {
        margin: 0 auto;
    }
`;
export const ContFinal=styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px auto;
    @media(max-width: 430px) {
        flex-direction: column;
        margin: 50px auto;
    }
`
export const Continuar=styled.button`
    padding: 15px 20px;
    font-size: 1rem;
    margin: 0 10px;
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
        margin: auto auto 0 auto;
        background:none;
        border:none;
        padding: 15px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        i{
            margin: auto 20px;
        }

        @media(max-width: 530px) {
        margin: 0px auto;
        color: white;
        width:80%;
        border-radius: 10px;
        background-color: darkred;
        border:2px solid red;
    }
    `;