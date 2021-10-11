import styled from "styled-components";


export const CuponsCep= styled.div`
    width: 30rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 20px;
    @media(max-width:500px){
        width: auto;
    }

`;


export const CupomArea=styled.div`
    background-color: white;
    display: flex;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px black;
    flex-wrap: wrap;

    i{
        animation: Around ease-in-out forwards 200ms;

        margin: 0 3rem;
        @media(max-width: 530px) {
        margin: 0 auto;
    }
    }
    /* div{
        display: ${props=>props.onClick?('flex'):( 'none')};
    }
     */
    @media(max-width: 530px) {
        flex-direction: column;
        margin: 1vh auto;
    }

`;
export const CuponsTitle=styled.p`
    display: flex;
    width: 20rem;
    flex-direction: row;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 600;
    color: gray;
    img{
        margin: 0 10px;
        width: 4rem;
    }
    @media(max-width: 530px) {
        width: auto;
        font-size: 1.1rem;
        margin: 0 8vw;
    }
    
`;

export const ShowCupom=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media(max-width: 530px) {
        display: flex;
        flex-direction: column;
    }

`;
export const CupomBar=styled.input`
    width: 18rem;
    font-size: 1rem;
    font-weight: 600;
    padding: 5px 5px;
    border-radius:10px;
    border:1px solid gray;
    
    :focus{
        box-shadow: none;
        border: 0 none;
        outline: 1px solid gray;
    }
  
`;
export const CupomButton=styled.button`
    padding: 5px 40px;
    margin: 10px 10px;
    font-size: 1.1rem;
    border: none;
    font-weight: 700;
    border-radius: 5px;
    color: #4f0381 ;
        background-color: #69dcfb;
transition: 300ms;
        :hover{
            background-color: #59bbdc;
        }
`;



export const IconActive=styled.i`
    
        margin: 0 2rem;
        padding:0 20px;
        height: auto;
        animation: Around  forwards 200ms ease-in-out;

        @keyframes Around{
            0%{
                transform: rotate(180deg);
            }
            100%{
                transform: rotate(0deg);
            }
        }
    
`;

export const CepArea=styled.div`
   background-color: white;
    display: flex;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 36.5vw;
    margin: 10px 0;
    box-shadow: 0px 0px 10px black;

    i{
        animation: Around ease-in-out forwards 200ms;

        margin: 0 3rem;
        @media(max-width: 530px) {
        margin: 0 auto;
    }
    
       
        @media(max-width: 530px) {
        margin: 0 auto;
    }
    }
    @media(max-width: 530px) {
        width: 15rem;
        font-size: 1.1rem;
        margin: 1vh 12vw;
    }
`
export const CepTitle=styled.p`
  display: flex;
    width: 20rem;
    align-items: center;
    flex-direction: row;
    font-size: 1.4rem;
    color: gray;
    font-weight: 600;
    img{
        margin: 0 25px;
        width: 2rem;
    }
    @media(max-width: 530px) {
        width: auto;
        font-size: 1.1rem;
        margin: 0 8vw;
    }
`;
export const ShowCep=styled.div`
animation: Show forwards 300ms ease-in-out;
display: flex;
flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .inputmask{
        width: 12rem;
    font-size: 1rem;
    font-weight: 600;
    padding: 5px 5px;
    border-radius:10px;
    border:1px solid gray;

    :focus{
        box-shadow: none;
        border: 0 none;
        outline: 1px solid gray;
    }
    }
@keyframes Show{
0%{
    opacity: 0;
 margin: 20px auto 0 0;
    
    
   
}100%{
    opacity: 1;
 margin: 8px auto ;
 
  
}
}
a{      
    margin: 10px 0;
        color:black;
    }
    @media(max-width: 530px) {
        display: flex;
        flex-direction: column;
    }
`;
export const CepBar=styled.input`
 width: 12rem;
    font-size: 1rem;
    font-weight: 600;
    padding: 5px 5px;
    border-radius:10px;
    border:1px solid gray;

    :focus{
        box-shadow: none;
        border: 0 none;
        outline: 1px solid gray;
    }
`;
export const CepButton=styled.button`
    padding: 8px 10px;
    margin: 10px 10px;
    font-size: 1rem;
    width:auto;
    border: none;
    font-weight: 700;
    border-radius: 5px;
    color: #4f0381 ;
        background-color: #69dcfb;
        transition: 300ms;

        :hover{
            background-color: #59bbdc;
        }
`;
