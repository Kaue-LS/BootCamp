import styled from "styled-components";

export const Container = styled.div`
    display:none;
    @media(max-width: 1020px){
    display:flex;
    z-index: 9999;
    height: 4.5rem;
    margin: -6.6vh auto;
    width: 100%;
    flex-direction: row;
    background-color: #463f4e;
    justify-content: center ;
    align-items: center;
    }     
    @media(max-width: 600px){
        margin: -12vh auto;


    }
    @media(max-width: 600px){
        margin: -12vh auto;


    }

`;

export const Items = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 20vw;
    border-left: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    color: #ffffff;
`; 

