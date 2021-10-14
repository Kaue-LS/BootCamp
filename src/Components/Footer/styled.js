import styled from "styled-components";

 export const Footer = styled.div`
  background-color: #252031;
  z-index: -1;
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
     background-color: violet;
     @media(max-width:752px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
 `;

 export const ContainerMenu = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
 @media(max-width:752px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
    }
 `;

 export const ContainerTitleMenu = styled.div`
 color:#ffffff;
 padding: 2rem 3rem;
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
 display: flex;
 flex-direction: column;
 p{
     width: 15vw;
    list-style: none;
     color: #ffffff;
     margin: 10px 0 0 0;
     text-align: left;
     font-size: 13px;
     word-spacing: 0px;
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
 margin: 0 auto;

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
    flex-wrap: wrap;
    border-top:1px solid gray;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 90%;
    height: auto;
    margin: 0 auto;
    margin-top: 10px;
    color: white;
    @media(max-width:1190px){
        border-top: 0px solid;
    }
    @media(max-width:752px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        img{
            width: 90%;
        }
    }
    p{
        width: 20vw;
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

