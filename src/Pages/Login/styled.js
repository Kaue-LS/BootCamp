import styled from "styled-components";

export const LoginCadastro=styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding:10px 20px;

    @media(max-width:1020px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
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
    font-weight: 700;
    line-height: 22.4px;
    color: #333333;
    margin: 20px auto;
    width: 90%;

    @media(max-width:500px){
        margin: 5px auto;
    }

`;

export const FormGroup=styled.div`
    margin: 10px 5%;
    display: flex;
    flex-direction: column;



    .inputmask{
        width: 80%;
padding: 10px 10px;
border-radius: 5px;
border:1px solid #BBBBBB;
animation: ShowInput forwards ease-in-out 600ms;

    }
    input{
        :focus{
            box-shadow: none;
            outline: none;
            border:1px solid #555555;
        }
    }
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
              margin: 0vh -40vw;
          
      }
      100%{
          margin: 0vw 0vw;
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
    width: 45vw;
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
    
    @media(max-width:1020px){
        width: 80vw;
    }
`;


export const LoginActive=styled.div`
z-index: 1;
  background-color: #ffffff;
    border: 1px solid gray;
    border-radius: 5px;
    width: 45vw;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin: 30px auto;
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
@media(max-width:1020px){
        width: 80vw;
    }  
    `


export const Input=styled.input`
padding: 10px 10px;
border-radius: 5px;
width: 80%;
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
export const Button=styled.button`
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
    width: 45vw;
    height: 140px;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    border-radius: 10px;
    margin: 30px 20px;
    transition: 300ms linear;
    :hover{
        background-color: #DDD;
    }
    
    @media(max-width:1020px){
        width: 80vw;
    }
`;
export const CadastrarActive=styled.div`
 background-color: white;
    border: 1px solid gray;
    width: 45vw;
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
        color:#444444;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 16px;
        margin: 0px auto 0 0;
        @media(max-width:500px){
        font-size: 12px;
    }
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
margin:10px 0;
    }

    @media(max-width:1020px){
        width: 80vw;
    }
`
export const Radio=styled.input`
    height: 22px;
    width: 22px;
`;