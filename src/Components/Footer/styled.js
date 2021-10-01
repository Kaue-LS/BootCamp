/* Aqui a parte do footer */
import styled from "styled-components";

 export const Footer = styled.div`
    @media(max-width:1030px){
        display: none;
    }     
 `;

 export const ContainerTop = styled.div`
     display: flex;
     background-color: #252031;
     height: 15rem;
 `;

 export const ContainerMenu = styled.div`
 display: flex;
 `;

 export const ContainerTitleMenu = styled.div`
 color:#ffffff;
 padding: 3rem 4rem;
 h3{
     font-weight: 100;
 }
 
 `;

 export const ContainerList = styled.h3`
 `;

 export const ContainerListItems = styled.div`

 padding: 1rem 0rem;
 p{
     color: #ffffff80;
     font-weight: 100;
     line-height: 40px;
 }
 `;

 export const ContainerMed = styled.h4`
     display: flex;
     background-color: #252031;
     color:#ffffff;
 `;

 export const ContainerTitleMenu2 = styled.div`
    margin: 2rem 0;
     padding-left: 8rem;
     padding-bottom:10rem;
     h3{
     font-weight: 100;
 }
 p{
     font-weight: 400;
 }
`;

 export const ContainerMedImg = styled.img`
     padding-top: 10px;
     width: 120px;
     height: 120px;
 `;