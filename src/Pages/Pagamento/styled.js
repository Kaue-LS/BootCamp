import styled from "styled-components";

export const Pagamento = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 50px auto;
  @media (max-width: 1020px) {
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
  }

  button {
    margin: 6px 0 16px 0;
    border: 1px solid #a7a7a7;
    text-transform: uppercase;
    padding: 10px 15px 10px 15px;
    width: 40vw;
    font-size: 20px;
    background-color: #ffffff;
    color: #4e008b;
    text-align: center;
    display: flex;
    font-weight: 700;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    transition: 300ms;
    :hover {
      background-color: #4e008b;
      color: white;
      cursor: pointer;
    }
    @media (max-width: 1020px) {
      margin: 20px auto 8px auto;
    }
  }
`;

export const DadosCliente = styled.div`
  background-color: #ffffff;
  width: 45vw;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px 24px 0 24px;
  @media (max-width: 1020px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px 20px 0 20px;
    margin: 0 20px;
  }
  @media (max-width: 720px) {
    width: 100%;
    padding: 10px 20px 0 20px;
    margin: 0px 20px 20px 20px;
    height: 50%;
  }
  h3 {
    font-size: 20px;
    font-weight: 900;
    color: #333333;
  }
  div {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: row;
      margin: 5px 0;
    }

    p {
      width: auto;
      font-size: 16px;
      font-weight: 900;
      color: #555555;
    }
    span {
      color: #555555;
      font-size: 16px;
      margin: 0 20px;
    }
  }
`;

export const DadosEntrega = styled.div`
  background-color: #ffffff;
  width: 45vw;
  margin: 10px 0;
  display: flex;

  border-radius: 10px;
  flex-direction: column;
  padding: 20px 24px 0 24px;
  @media (max-width: 1020px) {
    align-items: center;
    justify-content: center;
    padding: 10px 20px 0 20px;
    margin: 10px 20px;
    width: 100%;
  }
  @media (max-width: 720px) {
    width: 100%;
    padding: 10px 20px 0 20px;
    margin: 0px 20px 20px 20px;
    height: 50%;
  }
  h3 {
    font-size: 20px;
    font-weight: 900;
    color: #333333;
  }
  div {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: row;
      margin: 5px 0;
      i {
        font-size: 16px;
        color: #4e008b;
      }
    }

    p {
      width: auto;
      font-size: 16px;
      font-weight: 900;
      color: #555555;
    }
    span {
      font-size: 16px;
      color: #555555;
      margin: 0 20px;
    }
  }
`;

export const OpçoesEntrega = styled.div`
  background-color: white;
  display: flex;
  border-radius: 10px;
  width: 45vw;
  flex-direction: column;
  button {
    margin: 10px auto 20px auto;
    width: 80%;
    cursor: pointer;
    transition: 300ms;
    :hover {
      color: white;
    }
  }

  h3 {
    margin: 0 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 900;
    color: #333333;

    img {
      width: 50px;
    }
  }
  @media (max-width: 1020px) {
    align-items: center;
    justify-content: center;
    padding: 10px 20px 0 20px;
    margin: 10px 20px;
    width: 100%;
  }
`;



// =====================================
export const Container = styled.div`
  display: flex;
  width: 45vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius:10px;
  background-color: #ffffff;
  margin: 50px auto 15px auto;
  padding: 3px;

 
  @media (max-width: 1020px) {
    width: 90vw;
  }
`;

export const BodyForm = styled.div`
  @media (max-width: 1020px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }
`;

export const BodyCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  button{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Button=styled.button`
    background-color: #8aab04;
    color: white;
    text-align: center;
    width: 23rem;
    border: none;
    border-radius: 10px;
    font-size: 20px;
      padding: 10px 20px;
  font-weight: 700;
  transition: 400ms;
      :hover{
        background-color: #8ccb04;  
    }
`
export const Text=styled.h3`
  color: #555555;
  font-size: 16px;
  margin: 0 auto 15px auto;

`;
export const Subtext=styled.p`
  color: gray;
`;

export const ButtonGoogle=styled.button`
  background-color: black;
  color: white;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 16px;
  padding: 10px 10px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  img{
    margin: 0 20px;
    width: 60px;
  }

`;

export const OrdemCartao=styled.div`
  margin: 0 auto;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: 10px 10px;
  text-align: center;
  background-color: #777777;
  i{
    margin: 0 20px;
  }
`;