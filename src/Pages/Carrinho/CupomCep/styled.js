import styled from "styled-components";


export const CuponsCep= styled.div`
    width: 30rem;
    height: 10rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 20px;

`;


export const CupomArea=styled.div`
    background-color: white;
    display: flex;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px gray;
    flex-wrap: wrap;
    margin: 10px auto 0 auto;

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
    
`;

export const ShowCupom=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    animation: Show 300ms forwards ease-in-out;
    @keyframes Show{
0%{
    opacity: 0;
 margin: 20px auto 0 0;
    
    
   
}100%{
    opacity: 1;
 margin: 8px auto ;
 
  
}
}
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

        :hover{
            background-color: #59bbdc;
        }
`;



export const IconActive=styled.i`
    
        margin: 0 2rem;
    
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
 display: flex;
 box-shadow: 0px 0px 10px gray;

 background-color: white;
 border-radius: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
padding: 0px 16px;
    i{
        animation: Around ease-in-out forwards 200ms;
  
        margin: 0 2rem;
    
        height: auto;

       
        @media(max-width: 530px) {
        margin: 0 auto;
    }
    }
    @media(max-width: 530px) {
        flex-direction: column;
        padding: 0 0px;
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
        margin: 0 10px;
        width: 2rem;
    }
`;
export const ShowCep=styled.div`
animation: Show forwards 300ms ease-in-out;
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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

        :hover{
            background-color: #59bbdc;
        }
`;
