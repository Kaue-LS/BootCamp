import styled from 'styled-components'


export const OpçoesEntrega=styled.div`
background-color: white;
display: flex;
flex-direction: column;
button{
    margin: 10px auto 20px auto;
    width: 80%;
    transition: 300ms;
    cursor:pointer;
    :hover{
        background-color:  #4E008B;
        color: white;
    }
}

h3{
    margin: 0 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
        font-weight: 900;
        color: #333333;

        img{
            width: 50px;
        }
}
`;


export const Opçoes=styled.div`
display: flex;
flex-direction: column;
background-color: white;
margin: 50px auto;
border-radius: 10px;
width: 40vw;
padding: 10px 15px;

h2{
    margin: 10px auto 20px auto;
    font-size: 20px;
        font-weight: 900;
        color: #333333;
}

`;
export const MontagemMovel=styled.div`
display: flex;
flex-direction: column;

.header{
    
    background-image: url('https://www.pneustore.com.br/_ui/responsive/theme-pneustorePurple/images/delivery-header.png');
    background-repeat: no-repeat;
    background-size: 100%;
    h3{
        color: white;
        padding: 10px 10px;
        width: 50%;
        font-size: 20px;
        font-style: italic;
        border:5px solid #4E008B;
    background-color:  #4E008B;

    }
    
}
.body{
    margin: 2px 0;
    border-left:5px solid #4E008B;

    padding : 16px 16px ;
        display: flex;
        flex-direction: column;

        div{
            justify-content: space-between;
            display: flex;
            margin: 5px 0;
            flex-direction: row;

            h3{
                margin: 0 0px;
    display: flex;
    align-items: center;
    font-size: 20px;
        font-weight: 900;
        color: #333333;

        img{
            margin: 0 5px 0 0;
            width: 50px;
        }
            }
        }

        input{
            height: 25px;
            width: 25px;
        }

        p{
            font-size:14px;
            font-weight: 700;
            color:#333333;
            width: 50%;
        }
        span{
            font-size:14px;
            font-weight: 700;
            color:#333333;
        }
    }
    `
    
export const CentroMontagem=styled.div`
display: flex;
flex-direction: column;

.header{
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

border-left:5px solid #4E008B;

    font-size: 18px;
    background-color: #F1F1F1F1;
    display: flex;
    flex-direction: row;
    padding: 10px 10px;
    align-items: center;
    color:#333333;
    justify-content: center;

    img{
        margin: 0 10px;
        width:45px;
    }
}
.body{
    border-bottom: 1px solid gray ;
    div{
        margin: 10px 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    h3{
        margin: 15px 0 0 0;
        color:#333333;
        font-size:17px;
        font-weight: 700;
    }
    h4{
        margin: 0 auto;
        color:#333333;
        font-size: 16px;
    }
    p{
        color:#333333;
        font-size: 14px;
        width: 300px;
    }
    input{
        
        margin: 10px 0 10px auto;
        height: 5px;
        width: 5px;
    }
}
}
`;

export const EndereçoEntrega=styled.div`
margin: 10px 0;
.head{
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-left:5px solid #4E008B ;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 10px;
    background-color: #F1F1F1F1;
    img{
        margin: 0px 10px;
        width: 45px;
    }

    h3{
        font-size: 18px;
        font-weight: 700;
        color:#333333
    }
}
.body{
    display: flex;
    flex-direction: column;

    div{
        justify-content: space-between;
        display: flex;
        flex-direction: row;

        h3{
            margin: 10px 0;
        font-size: 18px;
        font-weight: 700;
        color:#333333
    }
    input{}
    p{
        font-size: 18px;
        font-weight: 700;
        color:#333333
    }
    }
}


`;
