import styled from 'styled-components'


export const CepCuponsResu=styled.div`
display: flex;
padding: 10px 10px;
width: 90%;
margin: 0 auto;
flex-direction: row;

@media(max-width:930px){
    flex-direction: column;
    align-items: center;
    padding:0;
    justify-content: center;
}
`;

export const CepCupomAnuncio=styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    margin: 1vh auto;

    @media(max-width:930px){
        margin: 0 0;
        justify-content: center;
        width:45vw;
        align-items: center;
    }
`;
// Area do Resumo onde mostrar o total de todos os pneus selecionados
export const ResuButtons=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const resumoArea= styled.div`
    background-color: white;
    display: flex;
    box-shadow: 0px 0px 10px gray;

    flex-direction:column;
    width: 30vw;
    padding: 20px 0 0 0px;
    border-radius: 10px;
    @media(max-width: 930px) {
        width: 80vw;
        margin: 20px auto;
        position: initial;
    }
    @media(max-width: 430px) {
        width: 80vw;
        height: 21rem;
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
    @media(max-width: 1200px) {
        display: none;
    } 
     @media(max-width: 930px) {
         display: block;
    }
    @media(max-width: 560px) {
         display: none;
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
    font-weight: 600;
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
    @media(max-width: 430px) {
        width: 80vw;
        height: 10rem;
        margin: 20px auto;
        position: initial;
    }
`;
export const Title3=styled.h2`
    margin: 0 0 0 auto;
    font-weight: 100;
`;

export const TotalsubTotal= styled.div`
    display: flex;
    flex-direction: column;
    width: 41rem;
    margin: 0 auto;
`;
export const Pre??oTotal= styled.h4`
   font-size: 1.8rem;
   text-align: right;
    font-weight: 700;
    color:  #4f0381;
    @media(max-width: 930px) {
        font-size: 1.6rem;
    }
    @media(max-width:1100px){
        margin: 0 0 0 auto;
        text-align: center;
        font-size: 1.6rem;

    }
    
`;
export const SubPre??oTotal=styled.p`
    text-align: right;
    margin: 0 0 0 auto;
    width: 13rem;
    b{
        color:#595959;
    }
    @media(max-width:1100px){
        margin: 0 0 0 auto;
        width: auto;
    }
    @media(max-width:930px){
        margin: 10px 0 0 auto;
        font-size: 1.1rem;
        width: auto;
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
        flex-direction: column-reverse;
        margin: 50px auto;
        justify-content: center;
        align-items: center;
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
        margin: 0px 20px 10px 20px;
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
        margin: 0px 20px 10px 20px;
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
        margin: -10px auto 10px auto;
        color: white;
        width:80%;
        border-radius: 10px;
        background-color: darkred;
        border:2px solid red;
    }
    `;
