import styled from "styled-components";

export const LoginCadastro=styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding:10px 20px;
`;

export const Title=styled.h2`
    font-size: 33px;
    line-height: 36.3px;
    color: #4E008E;
    width: auto;
    text-align: center;
    margin: 20px auto;
    @media(max-width:500px){
        font-size:1.5rem;
    }
`;
export const SubTitle=styled.h4`
    font-size: 16px;
    font-weight: 100;
    line-height: 22.4px;
    color: #333333;
    margin: 20px auto;
    width: 90%;

`;

export const FormGroup=styled.div`
    margin: 10px 30px;
    display: flex;
    flex-direction: column;

    .radio{
        flex-direction: row;
    }
    label{
        font-size:13px;
  font-weight: 600;
  line-height: 19.5px;
  color: #463F4D;
  animation: Show forwards ease-in-out 400ms;

  @keyframes Show{
      0%{
          display: none;
          opacity: 0;
              margin: 0 -40px;
          
      }
      100%{
          display: flex;
          opacity: 1;   


      }
  }
  

  }
`

// ------------------------------------

export const Login=styled.div`
  background-color: #ffffff;
    border: 1px solid gray;
    border-radius: 5px;
    width: 602px;
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin: 30px 0;
    p{
       color: #4E008E;
       margin: 10px 30px;
    }
    transition: 300ms linear;
    :hover{
        background-color: #DDD;
    }
    
 
`;


export const LoginActive=styled.div`
z-index: 1;
  background-color: #ffffff;
    border: 1px solid gray;
    border-radius: 5px;
    width: 602px;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin: 30px 0;
    p{
       color: #4E008E;
       margin: 10px 30px;
       animation: Show forwards ease-in-out 800ms;

    @keyframes Show{
        0%{
            display: none;
            opacity: 0;
            margin: 0px -40px;
            
        }
        100%{
            display: flex;
            opacity: 1;
            margin: 10px 0px;
            
            

        }
    }

   

}
    `


export const Input=styled.input`
width: 80%;
padding: 10px 10px;
border-radius: 5px;
border:1px solid #BBBBBB;
animation: ShowInput forwards ease-in-out 600ms;

@keyframes ShowInput{
        0%{
            display: none;
            opacity: 0;
                margin: 0 -20px;
            
        }
        100%{
            display: flex;
            opacity: 1;
            
                margin: 0 0px;
            
            

        }
      
    }

`
export const Entrar=styled.button`
    background-color: #4E008E;
    padding:10px 15px;
    vertical-align:middle;
    text-transform: uppercase;
text-align: center;
justify-content: center;
align-self:center;
color: #ffffff;
width: 70%;
border: none;
border-radius: 5px;
margin: 0 auto;
font-size: 16px;
font-weight: 600;
line-height: 22px;

animation: Show forwards ease-in-out 1000ms;

    @keyframes Show{
        0%{
            display: none;
            opacity: 0;
                margin: 0 -40px;
            
        }
        100%{
            display: flex;
            opacity: 1;
            
                margin: 5px 0px;
            
            

        }
    }
    
`;
// -------------==-=-=-===-==


export const Cadastrar=styled.div`
  background-color: white;
    border: 1px solid gray;
    width: 602px;
    height: 100px;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    border-radius: 10px;
    margin: 30px 20px;
    transition: 300ms linear;
    :hover{
        background-color: #DDD;
    }
    
    
`;
export const CadastrarActive=styled.div`
 background-color: white;
    border: 1px solid gray;
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    border-radius: 10px;
    margin: 30px 20px;
    transition: 300ms linear;
span{
        color:#E53E3E;
    }
    label{
        display: flex;
        flex-wrap: wrap;
        font-family: Verdana;
        color:#444444;
        margin: 0px 40px 0 0;
    }
    div{
        display: flex;
        flex-direction: column;
        margin: 10px 0px;
    }
    input{
        margin: 0 10px 0 20px;
        
    }
    button{
        background-color: #4E008E;
    padding:10px 15px;
    vertical-align:middle;
    text-transform: uppercase;
text-align: center;
color: #ffffff;
width: 70%;
border: none;
border-radius: 5px;
margin: 0 auto;
font-size: 16px;
font-weight: 600;
line-height: 22px;
    }
`
export const Radio=styled.input`
    height: 22px;
    width: 22px;
`;