import styled from "styled-components";

export const NavButton=styled.div`
    display: flex;
    background-color: #3A006A;
    color: #ffffff ;
    height: 40px;
    text-align: center;
    padding: 0px 15px;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width:1020px){
        display: none;
    }
`;

export const Buttons=styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    li{
        @media(max-width:1275px){
            display: none;
        }
        font-size: 13px;
        padding:0 10px;
        display:flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        color: white;
        a{
            color: white;
            text-decoration: none;
        }
        i{
            margin: 0 5px;
        }
        
    }
        
    
`;
export const Button=styled.a`
    color: #ffffff;
    margin: 0 10px;
    padding: 8px 16px ;
    font-size: 14px;

    font-weight: 500;
    line-height: 19.5px;
    text-decoration: none;
    @media(max-width:1020px){
        font-size: 12px;
    }
`;

export const Tel=styled.div`
:hover{
            color:#68DCFA;
        }
`
export const Whatsapp =styled.div`
:hover{
            color:#68DCFA;
        }
`