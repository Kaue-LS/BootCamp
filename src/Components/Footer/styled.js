/* Aqui a parte do footer */
import styled from "styled-components";

 export const Footer = styled.div`
    @media(max-width:1030px){
        display: none;
    }     
 `;

 export const ContainerTop = styled.div`
     display: flex;
     background-color: #3A3A3A;
     height: 15rem;
 `;

 export const ContainerMenu = styled.div`
 display: flex;
 `;

 export const ContainerTitleMenu = styled.p`
 color:#ffffff;
 padding: 3rem 4rem;
 `;

 export const ContainerList = styled.h3`
 `;

 export const ContainerListItems = styled.h4`
 color: grey;
 padding: 1rem 0rem;
 `;

 export const ContainerMed = styled.h4`
     display: flex;
     background-color: #3A3A3A;
     color:#ffffff;
 `;

 export const ContainerTitleMenu2 = styled.p`
    margin: 2rem 0;
     padding-left: 8rem;
     padding-bottom:10rem;
`;

 export const ContainerMedImg = styled.img`
     padding-top: 10px;
     width: 120px;
     height: 120px;
 `;