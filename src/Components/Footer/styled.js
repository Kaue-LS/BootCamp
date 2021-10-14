import styled from "styled-components";

 export const Footer = styled.div`
  background-color: #252031;
  font-family: Verdana, Geneva, Tahoma, sans-serif,sans-serif;
  @media(max-width:752px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
    }          
 `;

 export const ContainerTop = styled.div`
     display: flex;
     @media(max-width:752px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
    }
 `;

 export const ContainerMenu = styled.div`
    display:flex;
 @media(max-width:752px){
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
    }
 `;

 export const ContainerTitleMenu = styled.div`
 color:#ffffff;
 padding: 2rem 4rem;
 display:flex;
 flex-direction: column;
 @media(max-width:752px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
    }
 
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
     @media(max-width:752px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
    }
 `;

 export const ContainerTitleMenu2 = styled.div`
    margin: 0rem auto;
    @media(max-width:752px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
     h3{
     font-weight: 100;
 }
/*  .social{
     margin: -3.5rem 0 0 0;
     font-weight: 600;
 } */
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
    padding: 30px;
    width: 70%;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10px;
    color: white;
    @media(max-width:752px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95%;
        img{
            width: 90%;
        }
    }
    p{
         margin: 0 20px;
    }
    .pgto {
        padding-bottom: 15px;
        padding-top: 25px;
    }
    
 `;

 export const Copyrigth=styled.div`
 background-color: #463F4D;
 text-align: center;
 padding: 10px 0;
 margin-top: 30px;
 
 p{ 
     font-size: 12px;
     color: white;
 }
    
 `;

 export const Accordion = styled.div`
    display: none;
    @media(max-width:752px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    padding: 12px;
    }
 `;
