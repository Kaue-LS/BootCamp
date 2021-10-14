import styled from "styled-components";

export const Footer = styled.div`
  background-color: #252031;
  font-family: Verdana, Geneva, Tahoma, sans-serif, sans-serif;
  @media (max-width: 752px) {
    display: flex;
    flex-direction: column;
    width: auto;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 752px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  padding: 10px 30px;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 752px) {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
  }
`;

export const ContainerTitleMenu = styled.div`
  color: #ffffff;
  display: flex;

  margin: 30px auto;
  flex-direction: column;
  @media (max-width: 752px) {
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
  p {
    list-style: none;
    color: #ffffff;
    margin: 10px 0 0 0;
    text-align: left;
    word-spacing: 0px;
    width: 300px;
    font-weight: 12px;
  }
`;

export const ContainerMed = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  height: auto;
  @media (max-width: 752px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
  }
`;

export const ContainerTitleMenu2 = styled.div`
  margin: 0rem auto;
  @media (max-width: 752px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    h3 {
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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
export const ImageArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 4rem;

  img {
    display: flex;
    flex-wrap: wrap;
    margin: 30px 30px;
    width: auto;
  }
  .icon {
    margin: 20px 20px;
    width: 3rem;
  }
`;

export const FormasPagamento = styled.div`
  display: flex;
  border-top: 2px solid gray;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 20px auto;
  color: white;
  text-align: center;
  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    img {
      @media (max-width: 1020px) {
        margin: 10px 0;
      }
      width: 50vw;
    }
  }
  p {
    margin: 0 20px;
  }
  .pgto {
    width: 300px;
    margin: 20px 20px;
    @media (max-width: 1020px) {
      margin: 0 0;
    }
  }
`;

export const Copyrigth = styled.div`
  background-color: #463f4d;
  text-align: center;
  padding: 10px 0 0 0;

  p {
    font-size: 12px;
    color: white;
    @media(max-width:880px){
        display:none ;
    }
   
  }
  span{
      display: none;
        @media(max-width:880px){
            display: block;
            color: white;
            margin: 10px 0;
        }
    }
    div{
        display: none;
        @media(max-width:880px){
            display: block;
            padding: 10px 10px;
            color: white;
        
        color:#ffffff;
        background-color: #4E008E;
        }
    }

  @media(max-width:880px){
      background:none;
  }
`;

export const Accordion = styled.div`
  display: none;
  @media (max-width: 752px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin: 0 auto;
    padding: 12px;
  }
`;
