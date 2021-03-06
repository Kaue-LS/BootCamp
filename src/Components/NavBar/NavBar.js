
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import CartIcon from "../CartIcon/CarIcon";
import { Lock } from "@material-ui/icons";
import { Axios} from "../../Api/Api";

export function NavBarPrincipal(props) {
  const [showOption, setShowOption] = useState(false);
    const [showSearch,setShowSearch]= useState(false)
    const [loading,setLoading]=useState(true)
    const[infopneu,setInfopneu]=useState([])

  useEffect(()=>{
    if(loading){
      ObterInfoPneu()
    }
  })

  const ObterInfoPneu=()=>{
    Axios.get('/CartItems')
    .then(res=>{
      const response=res.data;
      setInfopneu(response)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const Mostrar = (props) => {
    setShowOption(props);
  };
  const ShowSearch=(props)=>{
      setShowSearch(props)
  }

  const VerificarSearch=(props)=>{
    if(props.length>0){
      document.getElementById('lupa').style=`
      transition:200ms linear;
      color: #ffffff;
      background-color:#68CDFA;`

    }
    else{
      document.getElementById('lupa').style=`color: #ffffff50;
      background-color:#68CDFA80;
      transition:200ms linear;
      `

    }
  }

  return (
    <>
    <S.NavBar>
        {/* Reponsivo */}
        <Link style={{textDecoration:'none'}} to={props.location}>
        <S.Back><i className="im im-arrow-left"></i></S.Back>
        </Link>
      <S.Logo src="https://static.pneustore.com.br/medias/sys_master/root/hd3/hed/9042777407518/LOGO-PNEUSTORE-NEGATIVO.png" />
      <S.SearchBarLoupe>
        <S.SearchBar onChange={(props)=>VerificarSearch(props.target.value)} type="text" placeholder='Pesquise por Marca e Medida (exemplo 205/55R16)' />
        <i id='lupa' className="im im-magnifier"></i>
      </S.SearchBarLoupe>
      <S.Avatar>
        <S.Head />
        <S.Body />
      </S.Avatar>
      {showOption ? (
        <S.User>
          <S.UserEnterAtive onClick={() => Mostrar(false)}>
            <S.UserName>Olá! </S.UserName>
            <S.Entrar>
              Entrar
              <S.IconActive
                className="im im-angle-down"
                
              ></S.IconActive>
            </S.Entrar>
            <div style={{backgroundColor:'#ffffff',border:'2px solid  #4e018f',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <Link to='/login'>
            <S.Buttons>Login</S.Buttons>
            </Link>
            <Link to='/cart'>
            <S.Buttons>Meus pedidos</S.Buttons>
            </Link>
            <Link to='/address'>
            <S.Buttons>Endereço</S.Buttons>
            </Link>
            </div>
          </S.UserEnterAtive>
        </S.User>
      ) : (
        <S.User>
          <S.UserEnter  onClick={() => Mostrar(true)}>
            <S.UserName>Olá! </S.UserName>
            <S.Entrar>
              Entrar
              <i className="im im-angle-up"></i>
            </S.Entrar>
          </S.UserEnter>
        </S.User>
      )}
   

        <CartIcon quant={infopneu.length}/>

<S.Search>
        {" "}
        {
            showSearch?(
                <i className="im im-magnifier" onClick={()=>ShowSearch(false)}></i>
            ):(
                <i className="im im-magnifier" onClick={()=>ShowSearch(true)}></i>
            )
        }
          
      </S.Search>
   
    </S.NavBar>
       {/* Responsivo */}
    
        
        {
            showSearch?(
                <S.ShowSearch>
                <S.SearchBarLoupeResponsive>
                <S.SearchLoupeArea>
                <S.SearchBarResponsive type="text"  onChange={(props)=>VerificarSearch(props.target.value)}/>
                <i className="im im-magnifier" id='lupa' ></i>
                </S.SearchLoupeArea>
              </S.SearchBarLoupeResponsive>
                </S.ShowSearch>
            ):(
                <S.HiddenSearch>
                <S.SearchBarLoupeResponsive>
                <S.SearchLoupeArea>
                <S.SearchBarResponsive type="text"  onChange={(props)=>VerificarSearch(props.target.value)}/>
                <i className="im im-magnifier" id='lupa' ></i>
                </S.SearchLoupeArea>
              </S.SearchBarLoupeResponsive>
                </S.HiddenSearch>

            )
        }
     
    </>
  );
}
export function NavBarSecundaria(props) {
  const [showOption, setShowOption] = useState(false);
    const [showSearch,setShowSearch]= useState(false)


  const Mostrar = (props) => {
    setShowOption(props);
  };
  const ShowSearch=(props)=>{
      setShowSearch(props)
  }

  const VerificarSearch=(props)=>{
    if(props.length>0){
      document.getElementById('lupa').style=`
      transition:200ms linear;
      color: #ffffff;
      background-color:#68CDFA;`

    }
    else{
      document.getElementById('lupa').style=`color: #ffffff50;
      background-color:#68CDFA80;
      transition:200ms linear;
      `

    }
  }

  return (
    <>
    <S.NavBar>
        {/* Reponsivo */}
        <Link style={{textDecoration: 'none'}} to={props.location}>
        <S.Back><i className="im im-arrow-left"></i></S.Back>
        </Link>
      <S.Logo src="https://static.pneustore.com.br/medias/sys_master/root/hd3/hed/9042777407518/LOGO-PNEUSTORE-NEGATIVO.png" />
      <S.SearchBarLoupe>
        <S.SearchBar onChange={(props)=>VerificarSearch(props.target.value)} type="text" placeholder='Pesquise por Marca e Medida (exemplo 205/55R16)' />
        <i id='lupa' className="im im-magnifier"></i>
      </S.SearchBarLoupe>
      <S.Avatar>
        <S.Head />
        <S.Body />
      </S.Avatar>
      {showOption ? (
        <S.User>
          <S.UserEnterAtive onClick={() => Mostrar(false)}>
            <S.UserName>Olá! </S.UserName>
            <S.Entrar>
              Entrar
              <S.IconActive
                className="im im-angle-down"
                
              ></S.IconActive>
            </S.Entrar>
            <div style={{backgroundColor:'#ffffff',border:'2px solid  #4e018f',display:'flex',flexDirection:'column', height:140}}>
              <Link to='/login'>
            <S.Buttons>Login</S.Buttons>
            </Link>
            <Link to='/cart'>
            <S.Buttons>Meus pedidos</S.Buttons>
            </Link>
            <Link to='/address'>
            <S.Buttons>Endereço</S.Buttons>
            </Link>
            </div>
          </S.UserEnterAtive>
        </S.User>
      ) : (
        <S.User>
          <S.UserEnter  onClick={() => Mostrar(true)}>
            <S.UserName>Olá! </S.UserName>
            <S.Entrar>
              Entrar
              <i className="im im-angle-up"></i>
            </S.Entrar>
          </S.UserEnter>
        </S.User>
      )}
    

<S.Search>
        {" "}
        {
            showSearch?(
                <i className="im im-magnifier" onClick={()=>ShowSearch(false)}></i>
            ):(
                <i className="im im-magnifier" onClick={()=>ShowSearch(true)}></i>
            )
        }
          
      </S.Search>
   
    </S.NavBar>
       {/* Responsivo */}
    
        
        {
            showSearch?(
                <S.ShowSearch>
                <S.SearchBarLoupeResponsive>
                <S.SearchLoupeArea>
                <S.SearchBarResponsive type="text"  onChange={(props)=>VerificarSearch(props.target.value)}/>
                <i className="im im-magnifier" id='lupa' ></i>
                </S.SearchLoupeArea>
              </S.SearchBarLoupeResponsive>
                </S.ShowSearch>
            ):(
                <S.HiddenSearch>
                <S.SearchBarLoupeResponsive>
                <S.SearchLoupeArea>
                <S.SearchBarResponsive type="text"  onChange={(props)=>VerificarSearch(props.target.value)}/>
                <i className="im im-magnifier" id='lupa' ></i>
                </S.SearchLoupeArea>
              </S.SearchBarLoupeResponsive>
                </S.HiddenSearch>

            )
        }
     
    </>
  );
}
export function NavBarTerciaria(props) {
  
  return (
    <>
      <S.NavBarTerciaria>
        <Link style={{textDecoration:'none'}} to={props.location}>
      <S.Back><i className="im im-arrow-left"></i></S.Back>
      </Link>
      <S.Logo src="https://static.pneustore.com.br/medias/sys_master/root/hd3/hed/9042777407518/LOGO-PNEUSTORE-NEGATIVO.png" />
      </S.NavBarTerciaria>
      <S.NavBarPagamento>
      <S.Logo src="https://static.pneustore.com.br/medias/sys_master/root/hd3/hed/9042777407518/LOGO-PNEUSTORE-NEGATIVO.png" />
      <div>
      <Lock style={{color:'#ffffff'}}/>
      <h2>Pagamento</h2>
      </div>
      </S.NavBarPagamento>

    </>
  );
}
export function NavBarQuaternária(props) {
  
  return (
    <>
      <S.NavBarTerciaria>
        <Link style={{textDecoration:'none'}} to={props.location}>
      <S.Back><i className="im im-arrow-left"></i></S.Back>
      </Link>
      <S.Logo src="https://static.pneustore.com.br/medias/sys_master/root/hd3/hed/9042777407518/LOGO-PNEUSTORE-NEGATIVO.png" />
      </S.NavBarTerciaria>
      <S.NavBarPagamento>
      <S.Logo src="https://static.pneustore.com.br/medias/sys_master/root/hd3/hed/9042777407518/LOGO-PNEUSTORE-NEGATIVO.png" />
      <div>
      <h2>Compra Finalizada</h2>
      </div>
      </S.NavBarPagamento>

    </>
  );
}