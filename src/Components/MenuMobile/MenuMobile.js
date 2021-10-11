import * as S from "./styled";
import LogoMenu from '../../Components/img/logomenu.jpg';

export default function MenuMobile() {
    return(
        <div>
            <S.Container>
            <S.Items><i className="im im-menu"></i></S.Items>
            <S.Items><img src={LogoMenu} alt="Logo" style={{ height: "60px",
    width: "70px"}}></img></S.Items>
            <S.Items><i className="im im-whatsapp"></i></S.Items>
            <S.Items><i className="im im-shopping-cart"></i></S.Items>
            <S.Items><i className="im im-speech-bubble"></i></S.Items>
            </S.Container>
        </div>
    )
}