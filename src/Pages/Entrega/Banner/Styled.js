import styled from 'styled-components';

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

export const Banner = styled.div`
    display: flex;
    align-items: column;
    flex-direction: column;
    width: 80vw;
    height: 65vh;
    background-color: #4e018f;
    opacity: 0.85;
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
    width: 1.5rem;
    height: 1.5rem;
    background-color: #ffffff;
    margin-left: 97%;
    @media(max-width:720px){
    margin-left: 92%;
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
        height: 90vh;
        padding: 2rem;
        padding-bottom: 1rem;

    }

`;

export const Image = styled.img`
    width: 80vw;
    height: 40vh;
    @media(max-width: 720px){
        width: 85vw;
        height: 28vh;
        margin-bottom: 5rem;
        padding: 0.8rem;
    }
`;

