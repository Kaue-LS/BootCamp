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
    margin: 20px auto 10px auto;
    @media(max-width:500px){
        font-size:1.5rem;
    }
`;
export const SubTitle=styled.h4`
    font-size: 16px;
    font-weight: 700;
    line-height: 22.4px;
    color: #333333;
    margin: 5px 0 0 0;
    width: 90%;

    @media(max-width:500px){
        margin: 5px auto;
    }

`;

export const FormGroup=styled.div`
    margin: 10px 5%;
    display: flex;
    flex-direction: column;

    .error{
        display: flex;
        border-top: 1px solid red;
        margin: 0 auto 20px auto;
        font-size:1vw;
    color:red;
}

    .inputmask{
        width: 80%;
padding: 10px 10px;
border-radius: 5px;
border:1px solid #BBBBBB;

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
  color: #463F4D;

 
  

  }
`

// ------------------------------------




export const LoginActive=styled.div`
z-index: 1;
  background-color: #ffffff;
    border-radius: 5px;
    width: 45vw;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin: 30px auto;
    p{
       color: #4E008E;
       margin: 10px 30px;
     
    }
    label{
        font-size: 16px;
        margin: 10px 0;
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
 transition: 300ms;
 cursor: pointer;
    :hover{
        background-color: #4E208E;

    }
    
`;
// -------------==-=-=-===-==



export const CadastrarActive=styled.div`
 background-color: white;
    width: 45vw;
    display: flex;
    flex-direction: column;
    padding: 10px 0px 0 0;
    border-radius: 10px;
    margin: 20px 20px 0 20px;
span{
        color:#E53E3E;
    }
    label{
        display: flex;
        color:#444444;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 16px;
        margin: 0px 20px 10px 5px;
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
        margin: 0 0;
        
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
    cursor: pointer;
    background-color: #4E008E;
    color: #4E008E;


`;