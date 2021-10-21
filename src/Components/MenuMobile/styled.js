import styled from "styled-components";

export const BodyContainer = styled.div`
    display: none;
    @media(max-width: 1020px){
        display: table;
        position: fixed;
        width: 100%;
        height: 50px;
        z-index: 99999;
        left: 0;
        bottom: 0;
        top: 90%;
        
    }


`
export const Container = styled.div`
    display:none;
    @media(max-width: 1020px){
    display:flex;
    height: 4.5rem;
    width: 100vw;
    position: fixed;
    z-index: 9999;
    background-color: #333333;
    justify-content: space-evenly;
    }     
`;

export const Items = styled.div`
    @media(max-width: 1020px){
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    }
`;