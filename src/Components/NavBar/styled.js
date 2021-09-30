import styled from "styled-components";

export const NavBar=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    z-index: 1;
    margin: 0 auto;
    background-color:#4e018f;
    @media(max-width:1030px){
        justify-content: center;
        align-items: center;
    }
    `
export const Logo= styled.img`
    width: 12rem;
    z-index: 1;

    margin: auto 10px auto 10vw;
    @media(max-width:1030px){
        margin:0 auto;
    }
`
export const SearchBarLoupe=styled.div`
    display: flex;
    width: auto;
    padding: 0 0 ;
    cursor: pointer;

    flex-direction: row;
    border-collapse: collapse;
    margin: 0 0px 0 20px;

    i{
        font-size: 1.5rem;
        padding: 8px 15px;
        margin: 0 30px 0 0px;
        border-top-right-radius: 5px;
        border-bottom-right-radius:5px;
        color: white;
        background-color:red;
    }
    @media(max-width:1030px){
        display: none;
    }
`;
export const SearchBar=styled.input`
    height: 2.5rem;
    min-width: 43vw;
    width: 30vw;
    border:1px solid gray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin: auto 0px auto auto;
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
    align-items: flex-start;
`;
export const Entrar=styled.p`
color: white;
    i{
        margin: 0 10px;
        font-size: 1rem;
        cursor: pointer;



    }

`;
export const UserName=styled.p`
`;

export const Buttons=styled.button`
background-color: white;
border: none;
padding: 10px 0px;
color: #4e018f;
    cursor: pointer;

font-size: 1rem;
width: 8rem;
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
    background-color: violet;
     padding: 10px 0px;
     font-size: 4rem;
    position: absolute;
    margin: 0 25vw -10vh 25vw;
        display: flex;
    z-index:1;
    transition: cubic-bezier(0.47, 0, 0.745, 0.715);

       
    }`
export const HiddenSearch=styled.div`
   display: none;
 @media(max-width:1030px){
     background-color: violet;
     padding: 10px 0px;
     z-index: -1;
     font-size: 4rem;
    position: absolute;
    margin: -60px 25vw 0vh 25vw;
        display: flex;

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

    i{
        font-size: 1.5rem;
        padding: 8px 15px;
        margin: 0 30px 0 0px;
        border-top-right-radius: 5px;
        border-bottom-right-radius:5px;
        color: white;
        background-color:red;
    }
}`
export const SearchBarResponsive=styled.input`
    width: 45vw;
`