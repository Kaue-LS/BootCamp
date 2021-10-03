/* Aqui a parte do footer */
import styled from "styled-components";

 export const Footer = styled.div`
  background-color: #252031;
  width: calc( (100%-86px) / 8 );
  font-family: Verdana, Geneva, Tahoma, sans-serif,sans-serif;
    @media(max-width:1030px){
        display: none;
    }     
 `;

 export const ContainerTop = styled.div`
     display: flex;
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
 margin: 10px 0px;
 li{
    list-style: none;
     color: #ffffff;
     margin: 10px 0 0 0;
     text-align: left;
     word-spacing: 0px;
     font-weight: 12px;
 }
 `;

 export const ContainerMed = styled.div`
     display: flex;

     align-items: center;
     color:#ffffff;
     height: auto;
 `;

 export const ContainerTitleMenu2 = styled.div`
    margin: 0rem auto;
     h3{
     font-weight: 100;
 }
 .social{
     margin: -3.5rem 0 0 0;
     font-weight: 600;
 }

`;

 export const ContainerMedImg = styled.div`
 display: flex;
 width: auto;
align-items: center;

 `;
 export const ImageArea=styled.div`
  display: flex;
 flex-direction: row;
 align-items: center;
 margin: 0 4rem;

  img{
     margin: 30px 30px;
     width:auto;
 }
 .icon{
     margin: 20px 20px;
     width: 3rem;
 }
 `;

 export const FormasPagamento=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    width: 70%;
    height: 6rem;
    margin: 0 auto;
    border-top: 2px solid gray;
    flex-direction: row;
    color: white;
    p{
         margin: 0 20px;
    }
    
 `;
 export const Copyrigth=styled.div`
 background-color: #463F4D;
 text-align: center;
 padding: 20px 0;
 p{ 
     font-size: 12px;
     color: white;

 }
 `
