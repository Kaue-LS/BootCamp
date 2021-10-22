import styled from 'styled-components'

export const Resumo =styled.div`
display: flex;
flex-direction: column;
h1{
    display: flex;
    align-items: center;
    color: #555555;
    font-size: 1.5rem;
    margin: 0  10px 10px 0px;
    i{
        margin: 0 10px;
        font-size: 2rem;
        color: #555555;
    }
}

div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    align-items: center;
    h3{
    margin: 20px 0;

        color: #222222;
    }
    span{
        font-size: 18px;
    }
}
button{
    font-size: 1.2rem;
    font-weight: 700;
    background-color: #666666;
    color: white;
    padding: 10px 20px;
    width: 60%;
    margin: 15px auto;
    border: none;
    border-radius: 10px;

}
.total{
    font-weight: 700;
    color:#4e008b;
}
`