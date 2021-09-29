import styled from "styled-components";

export const NavBar=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color:#4e018f;
    @media(max-width:1200px){
        justify-content: center;
        align-items: center;
    }
    `
export const Logo= styled.img`
    width: 12rem;
    margin: auto 10px auto 10.4rem;
    @media(max-width:1200px){
        margin:0 auto;
    }
`
export const SearchBarLoupe=styled.div`
    display: flex;
    padding: 0 0 ;
    flex-direction: row;
    border-collapse: collapse;
    margin: 0 0px 0 20px;

    i{
        font-size: 1.5rem;
        padding: 8px 15px;
        margin: 0 30px 0 0px;
        border-top-right-radius: 5px;
        border-bottom-right-radius:5px;
        color: white;
        background-color:red;
    }
    @media(max-width:1200px){
        display: none;
    }
`;
export const SearchBar=styled.input`
    height: 2.5rem;
    width: 34rem;
    border:1px solid gray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin: auto 0px auto 20px;
`

export const User= styled.div`
display: flex;
flex-direction: row;
margin: 15px 0 auto 0;

    i{
        font-size: 3rem;
        height:2rem;
    }
    @media(max-width:1200px){
        display: none;
    }
`;
export const UserName=styled.p`
    margin:15px 0 auto 10px;
`;