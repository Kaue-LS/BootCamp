import * as S from './styled'
export default function NavButton(){
 return(
     <S.NavButton>
         
         <S.Buttons>
             <S.Button>QUAL PNEU VOCÊ PRECISA?</S.Button>
             <S.Button>ACESSÓRIOS</S.Button>
             <S.Button>RODAS</S.Button>
             <S.Button>MARCAS</S.Button>
             <S.Button>PROMOÇÕES</S.Button>
             <li>Televendas</li>
             <li><i className="im im-phone"></i><a href="tel:+554730462551">(47) 3046-2551</a></li>
             <li><i className="im im-whatsapp"></i><a href="https://api.whatsapp.com/send?phone=5562996972262" target='_blank' rel='noreferrer'>(62) 99697-2262</a></li>
         </S.Buttons>
     </S.NavButton>
 )   
}