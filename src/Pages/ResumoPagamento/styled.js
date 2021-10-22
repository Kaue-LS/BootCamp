import styled from 'styled-components'

export  const Resumo=styled.div`
    width: 80%;
    margin:50px auto;
    display: flex;
    padding: 20px 0;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
background-color: white;



`

export const Header=styled.div`
    display: flex;
    width: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px auto;
    border-bottom: 1px solid gray;
    i{  
        font-size: 5rem;
        border:1.5rem solid #8aab04;
        border-radius: 100%;
        color: #ffffff;
        background-color:  #8aab04;

    }
    h1{
        
        margin: 10px auto 3px auto;
        color:  #8aab04;
        @media(max-width:880px){
            text-align: center;
            font-size: 1.5rem;
        }
    }
    

`

export const Number=styled.div`
     display: flex;
    width: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px auto;
    border-bottom: 1px solid gray;
    h2{
        color: #555555;
        margin: 0 auto 20px auto;
        @media(max-width:880px){
            text-align: center;
            font-size: 1.5rem;
        }
    }
    span{
        font-weight: 700;
        font-size: 24px;
        color:  #8aab04;
        margin: 0 0 15px 0;

    }
`

export const Email=styled.div`
   display: flex;
    width: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px auto;
    border-bottom: 1px solid gray;
    h2{
        font-size: 18px;
        color: #555555;
        margin: 0 auto 0px auto;
        span{
            color: #000000;
        }
        @media(max-width:880px){
            text-align: center;
            font-size: 1rem;
        }
    }
    i{
        color: gray;
        margin: 10px auto;
        font-size: 3rem;
    }
    p{
        color: #444444;
        margin: 10px auto;
        span{
            text-decoration: underline;
        font-weight: 700;
        color:  #000000;
        margin: 0 0 15px 0;

    }
    @media(max-width:880px){
            text-align: center;
            font-size: 1rem;
        }
    }
  
`

export const Calendar =styled.div`
   display: flex;
    width: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px auto;
    border-bottom: 1px solid gray;

    i{
        font-size: 3rem;
        color: gray;
    }
    p{
        text-align: center;
        color: #444444;
        width: 80%;
        font-size: 18px;
        margin: 10px auto 20px auto;
    }
   
`
export const Button=styled.button`
    background-color: #444444;
    color: white;
    width: 40%;
    font-size: 18px;
    font-weight: 700;
    border: none;
    margin: 0 auto;
    border-radius: 10px;
    padding: 10px 30px;
    @media(max-width:880px){
            text-align: center;
            width: 80%;
            font-size: 1.5rem;
        }
`

export const Title=styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: #555555;
    i{
        margin: 0 20px;
        color:black;
    }
`
export const SubTitle=styled.h3``



export const ProdutosArea=styled.div`
    background-color: white;
    width: 80%;
    border-radius: 10px;
    padding: 20px 20px;
    margin: 10px auto;
`

export const EndereçoArea=styled.div`
   background-color: white;
    width: 80%;
    border-radius: 10px;
    padding: 20px 20px;
    margin: 10px auto;
`;

export const ResumoArea=styled.div`
   background-color: white;
    width: 80%;
    border-radius: 10px;
    padding: 20px 20px;
    margin: 10px auto;
    `
    
export const Voltar =styled.button`
font-size: 1.5rem;
font-weight: 700;
border: none;
padding: 10px 10px;
margin: 10px 15%;
width: 50vw;
background-color: #4e008b;
color: white;
transition: 400ms;
:hover{
    background-color:  #4e228b;
}
`