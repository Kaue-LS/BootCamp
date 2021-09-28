import * as S from './styled'
export default function NavBar(){
    return(
        <S.NavBar>
        <S.Logo src='https://static.pneustore.com.br/medias/sys_master/root/hd3/hed/9042777407518/LOGO-PNEUSTORE-NEGATIVO.png'/>
        <S.SearchBarLoupe>
        <S.SearchBar type='text'/>
        <i class="im im-magnifier"></i>
        </S.SearchBarLoupe>
        <S.User>
        <i class="im im-user-circle"></i>
        <S.UserName>Ola </S.UserName>
        </S.User>
        </S.NavBar>
    )
}