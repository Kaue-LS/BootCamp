import styled from 'styled-components'

export const Endereço=styled.div`
  background-color: #F1F1F1;
  display: flex;
  flex-direction: row;

  @media(max-width:1020px){
      flex-direction: column;
  }
`;

export const Dados=styled.div`
display: flex;
flex-direction: column;
margin: 50px 50px;
@media(max-width:1020px){
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
      margin: 50px auto;
      
  }
  @media(max-width:720px){
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
      margin: 50px auto;
      
  }
`

export const DadosCliente=styled.div`

    background-color: #FFFFFF;
    width: 544px;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    padding: 20px 24px 0 24px;
    @media(max-width:1020px){
      width:100%;
      padding: 10px 20px 0 20px;
      margin: 0 20px;
      height: 50%;
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
       margin: 0 20px;
   }
    }

  
`;

export const EndereçoEntrega=styled.div`
 background-color: #FFFFFF;
    width: 544px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    border-radius: 10px;
    padding: 20px 24px 0 24px;
    @media(max-width:1020px){
      width: 100%;
      padding: 10px 24px;
      margin: 0 20px;

  }

    h3{
        font-size: 20px;
        font-weight: 900;
        color: #333333;
        margin: 0px 0px 0px 0;
    }

    button{
        margin: 16px 0 16px 0;
        border: 1px solid #A7A7A7;
        text-transform: uppercase;
        padding: 10px 15px 0 15px;
        width: 496px;
        font-size: 20px;
        background-color: #FFFFFF;
        color: #4E008B;
        text-align: center;
        display: flex;
        font-weight: 700;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        @media(max-width:1020px){
      width: auto;
      height: 50%;
      margin: 20px auto 8px auto;
  }

        img{
            width: 50px;
        }
    }
`;


// ========================

export const AdicionarEndereço=styled.div`
background-color: #FFFFFF;
border: 2px solid #DDDDDD;
    width: auto;
    display: flex;
    margin: 10px auto;
            

    border-radius: 10px;
    flex-direction: column;
    @media(min-width:1020px){
        animation: Show forwards ease-in-out 500ms;

    @keyframes Show{
        0%{
            display: none;
            opacity: 0;
                margin: 10px -39px;
            
        }
  
        100%{

            display: flex;
            opacity: 1;
            
                margin: 10px 140px;
               
    }            
}      

        
    }

    @media(max-width:1020px){
        margin: auto;
        width: 100%;
    }


`

export const Form=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
width: 100%;

   

        span{
            color:red;
        }

        p{
            margin: 5px auto 20px auto;
    font-size: 16px;
        font-weight: 900;
        color: #333333;  
        }
    
    button{
        width: 10rem;
        border: 1px solid  #4E008B;
        padding: 10px 0px;
        border-radius:5px;
        font-size: 20px;
        margin: 20px auto;
        background-color: #FFFFFF;
        color: #4E008B;
        font-weight: 600;
        text-align: center;
    }

      
    
`;
export const Label =styled.label`
    color:#555555;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 0px 0;
    width: 100%;
`;
export const Input =styled.input`
    width: auto;
    padding: 8px 16px;
    cursor: text;
    border-radius: 5px;
    border:1px solid #555555;
    margin: 5px 0px 10px 0px;

    :focus{
        border: 1px solid #555555;
        outline: none;
        box-shadow: none;
    }
`;
export const Checked=styled.input`
    height:30px;      
    width:30px;
    margin: 20px 0 20px 0;

        :checked{
            color:gold;
            border-color: gold;
            background-color: gold;
        }
`;
export const Header=styled.div`
    background-color:  #4E008B;
    color:white;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: row-reverse;
    width:100%;
    padding: 10px 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    h3{
    margin: 10px auto 10px auto;
    font-size: 25px;
        font-weight: 900;
        color: #FFFFFF;
}
i{
    margin: 10px 10px 0 20px;
 color:white;  
}

`;
export const FormBlock=styled.div`
    display: flex;
    margin:20px auto 5px auto;
    flex-direction: column;
    padding: 0 10px;
    width: 80%;
    div{
        display: flex;
        flex-direction: column;
    }
    .inputmask{
        width: auto;
    padding: 8px 16px;
    cursor: text;
    border-radius: 5px;
    border:1px solid #555555;
    margin: 5px 0px 10px 0px;
    :focus{
        border: 1px solid #555555;
        outline: none;
        box-shadow: none;
    }
    }
`;

export const TabelaEndereço=styled.div`
    background-color: white;
    margin:50px auto;
    width: 544px;
    height: 200px;
    min-height: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width:1020px){
        margin: auto;
        width: 100%;
        height: auto;
    }

        h3{
        font-size: 20px;
        font-weight: 900;
        color: #333333;
        margin: 20px auto;
    
    }
    
    
`

export const Lista=styled.div`
display: flex;
flex-direction: column;
`
export const CaixaVazia=styled.div`
    background-color:   #4E008B50;
    padding: 20px 20px;
    width: auto;
    border-radius: 10px;
    margin: 10px auto;
    display: flex;
    h4{
        font-size:16px;
        font-weight: 900;
        color: #333333;
        margin: 0px auto;
    }
   

`;
export const CaixaEndereço=styled.div`

`