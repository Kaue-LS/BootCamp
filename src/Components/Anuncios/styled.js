import styled from "styled-components";

export const AnuncioArea=styled.div`
    width: 80%;
    margin: 3rem 2rem;
 
    transition:300ms;
 

    
    @media(max-width:930px){
        width: 80vw;
    }
`;
export const AnuncioVan=styled.div`
    background-image: url('https://www.pneustore.com.br/medias/sys_master/images/images/hc7/h43/8918866493470/bg-lp-psmovel-desktop.png');
   display: flex;
   background-size: 100%;
    background-repeat: no-repeat;
   margin: 0 auto;
   @media(min-width:1030px){
    :hover{
    width: 90%;
    transition: 300ms;
        img{

            transition: 500ms;
            width: 35%;
        }
    }
}
`;
export const Anuncio=styled.div`
   margin: 0 auto;
   transition: 400ms;

  img{
      width:100%;
  }
  :hover{

    width: 110%;
      
    
}
`;
export const Van=styled.img`
    width:25%;
    margin:0 auto 0 0;
`
export const Logo=styled.img`
    height: 25%;
    width: 25%;
    margin:auto auto auto auto;

`