import styled from 'styled-components'

export const Entrega=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`
export const Dados=styled.div`
display: flex;
flex-direction: column;
margin: 50px 0 50px auto;
@media(max-width:1020px){
    width: 80%;
    justify-content: center;
    align-items: center;
      margin: 50px auto;
      
  }
  @media(max-width:820px){
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
      margin: 50px auto;
      
  }

  button{
        margin: 6px 0 16px 0;
        border: 1px solid #A7A7A7;
        text-transform: uppercase;
        padding: 10px 15px 10px 15px;
        width: 40vw;
        font-size: 20px;
        background-color: #FFFFFF;
        color: #4E008B;
        text-align: center;
        display: flex;
        font-weight: 700;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        transition: 300ms;
    :hover{
        background-color:  #4E008B;
        color: white;
        cursor: pointer;
    }
        @media(max-width:1020px){
      margin: 20px auto 8px auto;
  }
  }
`;

export const DadosCliente=styled.div`

    background-color: #FFFFFF;
    width:45vw;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    padding: 20px 24px 0 24px;
    @media(max-width:1020px){
      width:100%;
      justify-content: center;
      align-items: center;
      padding: 10px 20px 0 20px;
      margin: 0 20px;
  }
  @media(max-width:720px){
      width:100%;
      padding: 10px 20px 0 20px;
      margin: 0px 20px 20px 20px;
      height: 50%;
  }
    h3{
        font-size: 20px;
        font-weight: 900;
        color: #333333;
    }
    div{
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        div{
            display: flex;
            flex-direction: row;
            margin: 5px 0;
        }

        p{
            width: auto;
        font-size: 16px;
        font-weight: 900;
        color: #555555;
    }
   span{
       color: #555555;
       font-size: 16px;
       margin: 0 20px;
   }
    }

  
`;

export const DadosEntrega=styled.div`

    background-color: #FFFFFF;
    width: 45vw;
    margin: 10px 0;
    display: flex;

    border-radius: 10px;
    flex-direction: column;
    padding: 20px 24px 0 24px;
    @media(max-width:1020px){
        align-items: center;
        justify-content: center;
      padding: 10px 20px 0 20px;
      margin: 10px 20px;
      width: 100%;
  }
  @media(max-width:720px){
      width:100%;
      padding: 10px 20px 0 20px;
      margin: 0px 20px 20px 20px;
      height: 50%;
  }
    h3{
        font-size: 20px;
        font-weight: 900;
        color: #333333;
    }
    div{
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        div{
            display: flex;
            flex-direction: row;
            margin: 5px 0;
            i{
                font-size: 16px;
                color: #4E008B;
            }
        }

        p{
            width: auto;
        font-size: 16px;
        font-weight: 900;
        color: #555555;
    }
   span{
       font-size: 16px;
       color:#555555;
       margin: 0 20px;
   }
    }

  
`;


export const OpçoesEntrega=styled.div`
background-color: white;
display: flex;
border-radius: 10px;
width: 45vw;
flex-direction: column;
button{
    margin: 10px auto 20px auto;
    width: 80%;
    cursor: pointer;
    transition: 300ms;
    :hover{
        background-color:  #4E008B;
        color: white;
    }
}

h3{
    margin: 0 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
        font-weight: 900;
        color: #333333;

        img{
            width: 50px;
        }
}
@media(max-width:1020px){
        align-items: center;
        justify-content: center;
      padding: 10px 20px 0 20px;
      margin: 10px 20px;
      width: 100%;
      }
`;


export const Opçoes=styled.div`
display: flex;
flex-direction: column;
background-color: white;
margin: 50px auto;
border-radius: 10px;
width: 45vw;
padding: 10px 15px;

h2{
    margin: 10px auto 20px auto;
    font-size: 20px;
        font-weight: 900;
        color: #333333;
}
@media(max-width:1020px){
      width: 100%;
      }
`;
export const MontagemMovel=styled.div`
display: flex;
flex-direction: column;

.header{
    
    background-image: url('https://www.pneustore.com.br/_ui/responsive/theme-pneustorePurple/images/delivery-header.png');
    background-repeat: no-repeat;
    background-size: 100%;
    h3{
        color: white;
        padding: 10px 10px;
        width: 50%;
        font-size: 20px;
        font-style: italic;
        border:5px solid #4E008B;
    background-color:  #4E008B;

    }
    
}
.body{
    margin: 2px 0;
    border-left:5px solid #4E008B;

    padding : 16px 16px ;
        display: flex;
        flex-direction: column;

        div{
            justify-content: space-between;
            display: flex;
            margin: 5px 0;
            flex-direction: row;

            h3{
                margin: 0 0px;
    display: flex;
    align-items: center;
    font-size: 20px;
        font-weight: 900;
        color: #333333;

        img{
            margin: 0 5px 0 0;
            width: 50px;
        }
            }
        }

        input{
            height: 25px;
            width: 25px;
        }

        p{
            font-size:14px;
            font-weight: 700;
            color:#333333;
            width: 50%;
        }
        span{
            font-size:14px;
            font-weight: 700;
            color:#333333;
        }
        .SaibaMais{
            font-size:18px;
            text-decoration:underline;
        color:#4f0381;
        font-weight: 700;
        }   
    }


`


export const CentroMontagem=styled.div`
    display: flex;
    flex-direction: column;

    .header{
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;

    border-left:5px solid #4E008B;

        font-size: 18px;
        background-color: #F1F1F1F1;
        display: flex;
        flex-direction: row;
        padding: 10px 10px;
        align-items: center;
        color:#333333;
        justify-content: center;

        img{
            margin: 0 10px;
            width:45px;
        }
    }
    .body{
        border-bottom: 1px solid gray ;
        div{
            margin: 10px 10px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        h3{
            margin: 15px 0 0 0;
            color:#333333;
            font-size:17px;
            font-weight: 700;
        }
        h4{
            margin: 0 auto;
            color:#333333;
            font-size: 16px;
        }
        p{
            color:#333333;
            font-size: 14px;
            width: 300px;
        }
        input{
            margin: 10px 0 10px auto;
            height: 25px;
            width: 25px;
        }
        .SaibaMais{
            font-size:18px;
            text-decoration:underline;
        color:#4f0381;
        font-weight: 700;
        }   
    }
    }
`;

export const EndereçoEntrega=styled.div`
margin: 10px 0;
    .head{
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        border-left:5px solid #4E008B ;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 10px;
        background-color: #F1F1F1F1;
        img{
            margin: 0px 10px;
            width: 45px;
        }

        h3{
            font-size: 18px;
            font-weight: 700;
            color:#333333
        }
    }
    .body{
        display: flex;
        flex-direction: column;

        div{
            justify-content: space-between;
            display: flex;
            flex-direction: row;

            h3{
            font-size: 18px;
            font-weight: 700;
            color:#333333
        }
        input{
            margin: 10px 5px 10px auto ;
            height: 25px;
            width: 25px;
        }
        p{
            font-size: 18px;
            font-weight: 700;
            color:#333333
        }
        }
        .SaibaMais{
            font-size:18px;
            text-decoration:underline;
        color:#4f0381;
        font-weight: 700;
        }   
    }


`;

// ===============================================


export const ResuItens=styled.div`
margin: 50px auto;
border-radius: 10px;
`;
export const Item=styled.div`
background-color: white;
border-radius: 10px;
`;


export const resumoArea= styled.div`
    background-color: white;
    display: flex;
    margin: 50px auto;
    flex-direction:column;
    width: 40vw;
    height: 50%;
    padding: 20px 0 0 0px;
    border-radius: 10px;
    @media(max-width: 1020px) {
        width: 80vw;
        margin: 20px auto;
        position: initial;
    }
    @media(max-width: 430px) {
        width: 100vw;
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
    font-size: 20px;
    width: auto;
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
    flex-direction: column;
    border-top: 1px solid darkgray;
    padding: 20px 0;
    color:#323232;
    div{
        display: flex;
        flex-direction: row;
    }
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
    background-color: #f9f9f9;
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
export const PreçoTotal= styled.h4`
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
export const SubPreçoTotal=styled.p`
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

export const ShowBanner=styled.div`

`;
export const ShowBannerResponsive=styled.div`
display: none;
@media(max-width:1020px){
    display: block;
}

`;

// Banner



export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 40vh;
    position: fixed;
    z-index: 5;
    margin-top: 3rem;
`;
export const TitleBanner=styled.h3`
    color: white;
    font-size: 1.5rem;
    text-align: center;
    margin: 20px auto 0 auto;
`;
export const Banner = styled.div`
    display: flex;
    align-items: column;
    flex-direction: column;
    width: 80vw;
    border-radius: 10px;
    height: 65vh;
    background-color: #4e018f;
    margin-top: 4rem;
    margin-bottom:3rem;
    @media(max-width: 720px){
        display: flex;
        width: 90vw;
        height: 90vh;
        margin-top: 1rem;
        margin-bottom: 4rem;
    } 
`;

export const Fechar = styled.button`
    background-color:  #4f0381;
    color:#ffffff;
    margin: 20px auto;
    font-size: 18px;
    border-radius: 10px;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 700;
    transition: 400ms;
    :hover{
        background-color: #4f2381 ;
    }
    @media(max-width:720px){
        margin: 20px auto;
        padding: 10px 20px;
    }
`;

export const Text = styled.span`
    padding: 4rem;
    text-align: justify;
    font-size: 20px;
    z-index: 5;
    color: #ffffff;
      text-shadow: 
               -1px -1px 0px #000, 
               -1px 1px 0px #000,                    
                1px -1px 0px #000,                  
                1px 0px 0px #000;
                @media(max-width: 720px){
        display: flex;
        width: 90vw;
        padding: 2rem;

    }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    @media(max-width: 720px){
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }
`;


export const Proximo=styled.button`
    color: white;
    width: 80%;
    display: flex;
    text-decoration: none;
    justify-content: center;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    background-color: #8aab04;
    padding:10px 10px ;
    transition: 400ms;
    :hover{
        background-color: #8ccb04;  
    }
`
