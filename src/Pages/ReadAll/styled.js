import styled from "styled-components";

export const ReadAllTires=styled.div`
    display: flex;
    padding:5vh 8vw;
    background-color: #ffffff;
    @media(max-width:1020px){
        padding: 5vh 1vw;
    }
`;
// Area dos botoes com opções a esquerda
export const ProductOptions=styled.div`
    width: auto;
    @media(max-width:1020px){
        display: none;
    }
`;

export const Options= styled.div`
    background-color: #F1F1F1F1;
    padding: 20px 10px;
    margin: 0px 0 10px 0;
    width: 230px;
    height: 56px;
    
    div{
        font-variant: 13px;
        color: #4E008E;
        font-weight: 700;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;

        img{
            color: #DDDDDD;
            height: 10px;
        }
    }
    
`;


// Area dos pneus
export const Tires=styled.div`
    margin: 0 3vw;
    width: 65.1vw;
`
export const Type=styled.h1``;

export const NavItems=styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    align-items: center;
    width: auto;
    margin: 5vh auto 0 auto;

    div{
        display: flex;
        width: auto;
        justify-content: center;
        align-items: center;

        p{
            text-align: right;
            width: 180px;
            margin: 0vh 3vw 0 auto;

            @media(max-width:1300px){
                width: auto;
                
            }
            @media(max-width:1020px){
                display: none;
            }
        }

    }
    p{
        width: 100px;
        margin: 0vh 0vw 0 auto;

    }
   
`

export const Items=styled.div`
    display: flex;
    justify-content: space-between;
`

export const Order=styled.select`
    background-color: #ffffff;
    color: #444444;
    font-weight: 700;
    width: 230px;
    font-size: 13px;
    border-radius: 3px;
    height: 37px;
    margin:  0 20px 0 0;
    border: 1px solid #BBBBBB;
    padding: 8px 40px 8px 16px;

    option{
        padding: 10px 10px;
    }
`

// ------------------------
export const Pneus=styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin:20px 0;
@media(max-width:1020px){
    width: 95vw;
}
`

export const Pneu=styled.div`
width: 220px;
margin: 3px auto;
background-color: white;
padding: 0px 20px;
justify-content: center;
align-items: center;
text-transform: uppercase;
@media(max-width:1020px){
    width: 463px;
    justify-content: center;
    align-items: center;
    margin:  0 0;
    border:1px solid gray;
}
div{

.pneu{
    width: 182px;
    height: 182px;
    @media(max-width:1020px){
        height: 300px;
        width: 300px;
    }
    
}
}
p{
    font-size: 14px;
    color:#333333;
    font-weight: 700;
    width: 190px;
}
transition: 300ms;
:hover{
    box-shadow: 0px 0px 5px  gray;
}
`
export const Desc=styled.div`
display:flex;
flex-direction: column;
div{
    margin: 10px 0 0 0;
    span{
        display: flex;
        align-items: center;
       
    }

}

`
export const Marca=styled.img`
width: 5rem;
`
export const Selos=styled.div`
color:black;
margin: 10px 0;
display: flex;
flex-direction: row;

`
export const ImageSelos=styled.img`
margin: 0 5px;
background-color: #DEDEDE;
padding: 3px 3px;
width: 30px;
`;
export const Preço=styled.div`
margin: 10px 0;
p{
    font-size: 12px;
    font-weight: 700;
    color:#555555;
}
    span{
        color:#B7CE08;
        font-size: 20px;
        font-weight: 900;
    }
`;
export const Comprar=styled.button`
    background-color: #DDD218;
    color:#FFFFFF;
    margin: 10px 0;
    width: 190px;
    cursor:pointer;
    height: 35px;
    text-transform: uppercase;
    font-size: 17px;
    border:1px solid #FFFFFF;
    padding: 0 16px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 10px;
`