import styled from "styled-components";

export const NavBarSearch=styled.div`
display: flex;
flex-direction: column;
position: relative;
`;

export const NavBar=styled.div`
    display: flex;
    padding: 0;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    position: relative;

    z-index: 1;
    margin: 0 auto;
    background-color:#4e018f;
    @media(max-width:1030px){
        justify-content: center;
        align-items: center;
    }
    `
export const NavBarTerciaria=styled.div`
img{
    display: none;
}
    @media(max-width:1020px){

    display: flex;
    padding: 0;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 5rem;

    z-index: 1;
    i{
    }
    img{
        display: block;
     margin:0 auto 0 22vw;
    }
    background-color:#4e018f;
    @media(max-width:1020px){
        justify-content: center;
        align-items: center;
    }
}
`;
export const NavBarPagamento=styled.div`
    background-color: #252031;
    display: flex;
    flex-direction: row;
    height: 5rem;
    align-items: center;
    img{
        width: 140px;
        @media(max-width:1030px){
            display: none;
        }
    }

    div{
        margin: 0 22vw;
        justify-content: center;
        align-items:center;
        color:white;
        display: flex;
        flex-direction: row;
        @media(max-width:1030px){
            margin: 0 auto;
        }
        h2{
            padding: 0 10px;
        }
    }
`;
export const Logo= styled.img`
    width: 12rem;
    z-index: 1;

    margin: auto 10px auto 9vw;
    @media(max-width:1030px){
        margin:0 auto;
        padding:0;
    }
`
export const SearchBarLoupe=styled.div`
    z-index: 100;
    width: auto;
    display: flex;
    padding: 0 0 ;
   
    cursor: pointer;
    flex-direction: row;
    border-collapse: collapse;
    margin: auto 30px auto 20px;

    i{
        height: 39px;
        width: 52px;
        text-align: center;
        padding:9px 0;
        font-size: 20px;
        font-weight: 900;
        border-top-right-radius: 5px;
        border-bottom-right-radius:5px;
        color: #ffffff80;
        background-color:#68CDFA80;
    }
    @media(max-width:1030px){
        display: none;
    }
`;
export const SearchBar=styled.input`
    height: 39px;
    min-width: 43vw;
    width: 30vw;
    height: 39px;
    padding: 8px 16px;
    border:1px solid gray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    :focus{
        box-shadow: none;
        border: 0 none;
        outline:0.5px solid ;
    }
`

export const User= styled.div`
display: flex;
flex-direction: row;
color: white;
margin: auto 0 auto 0;

    i{
        font-size: 3rem;
        height:2rem;
    }
    @media(max-width:1030px){
        display: none;
    }
`;
export const Avatar=styled.div`
margin: 0 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media(max-width:1030px){
        display: none;
    }
`
export const Head=styled.div`
    height: 1.3rem;
    width: 1.3rem;
    display: flex;
    border-radius: 100%;
    border: white 4px solid;
    div{
    }
    `;
export const Body=styled.div`
height: 1.8rem;
    width: 2rem;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;

    border-left: white 4px solid;
    border-right: white 4px solid;
    border-top: white 4px solid;

`
export const UserEnter=styled.div`
    margin: auto 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    justify-content: flex-start;
    align-items: flex-start;
`;
export const UserEnterAtive=styled.div`
    margin: 0.5rem 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    justify-content: end;
    height: auto;
    align-items: flex-start;
    i{
        height: auto;

       
    
    }
`;
export const IconActive=styled.i`
    
        margin: 0 2rem;
    
        height: auto;
        animation: Around  forwards 200ms ease-in-out;

        @keyframes Around{
            0%{
                transform: rotate(180deg);
            }
            100%{
                transform: rotate(0deg);
            }
        }
    
`;
export const Entrar=styled.p`
color: white;
    i{
        animation: Around ease-in-out forwards 200ms;
        height: auto;
        margin: 0 20px;
        font-size: 1rem;
        cursor: pointer;
       

    }

`;
export const UserName=styled.p`
`;

export const Buttons=styled.button`
background-color: white;
border: none;
padding: 10px 10px;
color: #4e018f;
    cursor: pointer;
 margin: -50px 0 0 0;
font-size: 1rem;
width: 8rem;
transition:400ms;
animation:Show forwards 300ms ease-in-out;
@keyframes  Show{
 0%{
     opacity: 0;
    margin: -50px 0px 0 0;
 }
 100%{
     opacity: 1;
     margin: 5px 0 0 0;
 }
 }
 
 :hover{
     background-color: #DDD;
 }
`;


// Colocando menu reponsivo

export const Search=styled.div`
    display: none;
 @media(max-width:1030px){
     font-size: 4rem;
     cursor: pointer;

        margin: 0 5vw;
        display: flex;

        i{
            color:white;
            font-size:3rem;
        }
    }
`
export const Back=styled.button`
      display: none;
 @media(max-width:1030px){
     font-size: 4rem;
    background: none;
    border: none;
    cursor: pointer;
        margin: 0 5vw;
        display: flex;

        i{
            color:white;
            font-size:3rem;
        }
    }
`;

export const ShowSearch=styled.div`
    display: none;
 @media(max-width:1030px){
    background-color: #4e018f70;
     padding: 10px 10px;
     font-size: 4rem;
     display: block;
     height: 4rem;
    animation:Show forwards 300ms ease-in-out;
    @keyframes Show{
            0%{
                opacity: 0;
                margin: -4rem auto auto auto;
            }
            100%{
                opacity: 1;
                display: none;
                margin: 0 auto;  
            }

        }
       
    }`
export const HiddenSearch=styled.div`
   display: none;
 @media(max-width:1030px){
     padding: 10px 0px;
     height: 4rem;
     background-color: #4e018f70;
                margin: 0 auto;
          font-size: 4rem;
          animation: Hidden reverse 400ms ease-in-out;
          @keyframes Show{
            0%{
                opacity: 0;
                transition: 500ms;
                margin: -4rem auto auto auto;
            }
            100%{
                opacity: 1;
                display: none;
                margin: 0 auto;  
            }

        }
 }
`
export const SearchBarLoupeResponsive=styled.div`
@media(max-width:1030px){
    position: absolute;
display: flex;
    padding: 0 0 ;
    cursor: pointer;

    flex-direction: row;
  
    border-collapse: collapse;

  
}`
export const SearchLoupeArea=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 25vw;
  i{
        height: 39px;
        width: 52px;
        text-align: center;
        padding:9px 0;
        font-size: 20px;
        font-weight: 900;
        border-top-right-radius: 5px;
        border-bottom-right-radius:5px;
        color: #ffffff;
        background-color:#68CDFA;
  }
  
    `;
export const SearchBarResponsive=styled.input`
    width: 45vw;
    height: 39px;
    padding: 8px 16px;
    border:1px solid gray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    :focus{
        box-shadow: none;
        border: 0 none;
        outline:0.5px solid ;
    }
`

