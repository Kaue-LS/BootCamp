import styled from 'styled-components'


export const StepperArea=styled.div`
background: none;
width: 100%;
overflow-y: hidden;
border-bottom: 10px solid #4f0381;
span{
    font-size: 15px;
    font-weight: 600;
}
    @media(max-width:460px){
        display: none;
    }
`;