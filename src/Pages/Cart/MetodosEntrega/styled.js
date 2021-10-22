import styled from 'styled-components'



export const MetodoEntrega=styled.div`
margin:  2vh auto 0vh auto;
width: 80%;
@media (max-width:730px){
  margin: 2vh auto 20vh auto;
}
`

export const Barra=styled.div``

export const OptionsBarra=styled.div`
display: flex;

flex-direction:column;

`
export const BarraArea=styled.div`
background-color:#4f0381;
height: 3px;
z-index: 99999;
width: 10vw;
margin:0 0 0 10%;
@media(max-width:730px){
  display: none;
}
`
// 0 0 0 -160%
// 0 170% 0 0
// 0 0 0 170%
export const OptionsArea=styled.div`
display: flex;
justify-content: center;
flex-direction: row;
z-index: 99;
box-shadow: 0px  10px 5px gray ;
`

export const Option1=styled.button`
    padding: 0px  10vw 0px 10vw;
    border: none;
    width: 80%;
    border-left: 2px solid gray;
    border-right: 2px solid gray;
    color:#555555;
    background-color: white;
    transition: 400ms ease;
    :hover{

    }
    img{
      width: 5vw;
      @media(max-width:730px){
        width: 3rem;
      }
    }

`
export const Option2=styled.button`
border: 2px solid black;
background-color: white;
padding: 0px  10vw 0px 10vw;
    border: none;
    width: 80%;
    border-right: 2px solid gray;
    color:#555555;
    transition: 400ms ease;
    :hover{

    }
    img{
      width: 5vw;
   
      @media(max-width:730px){
        width: 3rem;

      }
    }

`
export const Option3=styled.button`
padding: 0px  10vw 0px 10vw;
    border: none;
    width: 80%;
    background-color: white;
    border-right: 2px solid gray;

    color:#555555;
    transition: 400ms ease;
    :hover{

    }
    img{
      width: 4vw;
      @media(max-width:730px){
        width: 2.5rem;
      }
    }

`




export const EntregaArea=styled.div`
`
// =============================================================================7
export const AreaOpçoes=styled.div`
background-color:white;
padding: 10px 0;
`;

export const Opção1=styled.div`
width: 90%;
margin: 0 auto;
@media(max-width:730px){
    width: 100%;
}
`
export const MontagemMovel=styled.div`
display: flex;
flex-direction: column;
background-color: white;


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
    font-size: 23px;
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
            font-size:18px;
            font-weight: 700;
            color:#333333;
            width: 50%;
        }
        span{
            font-size:16px;
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
export const Opção2=styled.div`
  background-color: #ffffff80;
  width: 90%;
  margin: 0 auto;
  @media(max-width:730px){
    width: 100%;
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
            text-decoration:underline;
            font-size:18px;
        
        color:#4f0381;
        font-weight: 700;
        }   
    }
    }
`;

export const Opção3=styled.div`
  background-color: #ffffff80;
  width: 90%;
  margin: 0 auto;
  @media(max-width:730px){
    width: 100%;
}
`
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
                margin: 10px 0;
            font-size: 18px;
            font-weight: 700;
            color:#333333;
            @media(max-width:730px){
                width: 60%;
            }
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
            text-decoration:underline;
            font-size:18px;
        color:#4f0381;
        font-weight: 700;
        }   
    }


`;

// =======================

// Banner

export const Title=styled.h3`
    color: white;
    font-size: 1.5rem;
    margin: 20px auto 0 auto;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: -200px 0;
    height: 40vh;
    z-index: 999;
`;

export const Banner = styled.div`
    display: flex;
    align-items: column;
    flex-direction: column;
    width: 80vw;
    border-radius: 20px;
    height: 65vh;
    background-color: #4e018f;
    margin-top: 4rem;
    margin-bottom:3rem;
    @media(max-width: 880px){
        display: flex;
        width: 90vw;
        height: 90vh;
        margin-top: 1rem;
        margin-bottom: 4rem;
    } 
`;


export const Banner2 = styled.div`
    display: flex;
    align-items: column;
    flex-direction: column;
    width: 80vw;
    border-radius: 20px;
    height: 65vh;
    background-color: #4e018f;
    margin-top: 4rem;
    margin-bottom:3rem;
    @media(max-width: 800px){
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
    @media(max-width:880px){
        margin: 20px auto;
        padding: 10px 20px;
    }
`;

export const Text = styled.span`
    padding: 1rem 1rem;
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
        width: 90vw;

    }
    span{
        font-weight: 700;
        text-shadow: none;
        color: #FFFFFF;
    }
`;

export const Image = styled.img`
    width: 100%;
    margin: 0 auto;
    height: 100%;
    @media(max-width: 880px){
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }
`;
