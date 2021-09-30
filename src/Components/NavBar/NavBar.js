import { useState } from "react";
import * as S from "./styled";
export default function NavBar() {
  const [showOption, setShowOption] = useState(false);
    const [showSearch,setShowSearch]= useState(false)


  const Mostrar = (props) => {
    setShowOption(props);
  };
  const ShowSearch=(props)=>{
      setShowSearch(props)
  }

  return (
    <>
    <S.NavBar>
        {/* Reponsivo */}
        <S.Back><i class="im im-arrow-left"></i></S.Back>
      <S.Logo src="https://static.pneustore.com.br/medias/sys_master/root/hd3/hed/9042777407518/LOGO-PNEUSTORE-NEGATIVO.png" />
      <S.SearchBarLoupe>
        <S.SearchBar type="text" />
        <i class="im im-magnifier"></i>
      </S.SearchBarLoupe>
      <S.Avatar>
        <S.Head />
        <S.Body />
      </S.Avatar>
      {showOption ? (
        <S.User>
          <S.UserEnterAtive>
            <S.UserName>Olá! </S.UserName>
            <S.Entrar>
              Entrar{" "}
              <i
                className="im im-angle-down"
                onClick={() => Mostrar(false)}
              ></i>
            </S.Entrar>
            <S.Buttons>Login</S.Buttons>
            <S.Buttons>Meus pedidos</S.Buttons>
            <S.Buttons>Endereço</S.Buttons>
          </S.UserEnterAtive>
        </S.User>
      ) : (
        <S.User>
          <S.UserEnter>
            <S.UserName>Olá! </S.UserName>
            <S.Entrar>
              Entrar{" "}
              <i className="im im-angle-up" onClick={() => Mostrar(true)}></i>
            </S.Entrar>
          </S.UserEnter>
        </S.User>
      )}


<S.Search>
        {" "}
        {
            showSearch?(
                <i class="im im-magnifier" onClick={()=>ShowSearch(false)}></i>
            ):(
                <i class="im im-magnifier" onClick={()=>ShowSearch(true)}></i>
            )
        }
      </S.Search>
   
    </S.NavBar>
       {/* Responsivo */}
       
        
        {
            showSearch?(
                <S.ShowSearch>
                <S.SearchBarLoupeResponsive>
                <S.SearchBarResponsive type="text" />
                <i class="im im-magnifier"></i>
              </S.SearchBarLoupeResponsive>
                </S.ShowSearch>
            ):(
                <S.HiddenSearch>
                <S.SearchBarLoupeResponsive>
                <S.SearchBarResponsive type="text" />
                <i class="im im-magnifier"></i>
              </S.SearchBarLoupeResponsive>
                </S.HiddenSearch>

            )
        }
      
    </>
  );
}
