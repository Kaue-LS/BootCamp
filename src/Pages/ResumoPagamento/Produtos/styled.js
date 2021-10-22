import styled from 'styled-components'

export const ItemPedido=styled.div`
display: flex;
flex-direction: column;
`;
export const Items=styled.div`
display: flex;
flex-direction: row;
border-bottom: 1px solid gray;

flex-wrap: wrap;
background-color: white;
align-items: center;
span{
    margin: 0 20% 0 auto;
    font-weight: 700;
    font-size: 2.5rem;
    color:#4e008b;
}
img{
    margin: 0 20% 0 auto;
    width: 150px;
}
h3{
    margin: 0 10% 0 auto;
    color: #555555;
}

p{
    font-weight: 700;
    color: black;
    margin: 0 5% 0 auto;

}

@media(max-width:880px){
    img{
        margin: 0 auto;
    }
    p{
        margin: 0 auto;
    }
    span{
        margin: 0 auto;
    }
    h3{
        margin: 0 auto;
    }
}
@media(max-width:550px){
    flex-direction: column;
    img{
        margin: 10px auto;
    }
    p{
        margin: 10px auto;
    }
    span{
        text-align: center;
        width: 80%;
        margin: 10px auto;
    }
    h3{
        margin: 10px auto;
    }
}
`