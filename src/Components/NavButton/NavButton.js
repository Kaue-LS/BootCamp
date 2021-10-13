import * as S from './styled';
import BasicMenu0 from './Buttons/Button0';
import BasicMenu1 from './Buttons/Button1';
import BasicMenu2 from './Buttons/Button2';
import BasicMenu3 from './Buttons/Button3';

export default function NavButton(){
 return(
     <S.NavButton>
         <BasicMenu0></BasicMenu0>
         <BasicMenu1></BasicMenu1>
         <BasicMenu2></BasicMenu2>
         <BasicMenu3></BasicMenu3>
         <S.Buttons>
             <li>Televendas</li>
             <li><i className="im im-phone"></i><a href="tel:+554730462551">(47) 3046-2551</a></li>
             <li><i className="im im-whatsapp"></i><a href="https://api.whatsapp.com/send?phone=5562996972262" target='_blank' rel='noreferrer'>(62) 99697-2262</a></li>
         </S.Buttons>
     </S.NavButton>
 )   
}