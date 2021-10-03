import styled from "styled-components";

export const AnuncioArea=styled.div`
    width: 80%;
    margin: 2rem 2rem;
 
    transition:300ms;
 

    
    @media(max-width:930px){
        width: 80vw;
    }
    @media(max-width:430px){
        width: 40%;
        margin: 0 auto;
    }
  
`;
