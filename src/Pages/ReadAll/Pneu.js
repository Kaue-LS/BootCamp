import * as S from './styled'
import { Rating } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default function Pneu(){
    return(
<S.Pneu>
              <div>
                <img
                  className="pneu"
                  src="https://static.pneustore.com.br/medias/sys_master/images/images/hee/ha2/8860120940574/jogo-de-4pneus-firestone-aro-15-f-600-195-55r15-85h-1.jpg"
                  alt=""
                />
              </div>
              <S.Desc>
              <p>Jogo 4 Pneys Firestone Aro 15 F-600 195/55R15 85H </p>
              <div>
              
                <S.Marca
                  src="https://www.pneustore.com.br/medias/sys_master/images/images/h44/hcd/9021182869534/mini-banner-pneustore-firestone.svg"
                  alt=""
                />
            
             
              <div style={{display:'flex',flexDirection:'row'}}>
              <Rating
                size= 'small'
                name="half-rating-read"
                defaultValue={211}
                precision={0.5}
                readOnly
                value={4.5}
              />
              <span style={{color:'#DAA81D',fontSize:11}}>(211)
              </span>
              </div>
              </div>
              
              </S.Desc>
              <S.Selos>
                  
                  <S.ImageSelos src='https://static.pneustore.com.br/medias/sys_master/images/images/hcd/h6d/8862548164638/premium.svg' alt='Premium'/>
                
                
                  <S.ImageSelos src='https://static.pneustore.com.br/medias/sys_master/images/images/h53/h07/8862547640350/alta-kilometragem.svg' alt='Alta Kilometragem'/>
                  
                  
                  <S.ImageSelos src='https://static.pneustore.com.br/medias/sys_master/images/images/h06/ha3/8862548623390/simetrico.svg' alt='Simetrico'/>
                
              </S.Selos>
              <S.Preço>
                  <p><span>R$ 928,63</span> à vista ou 6x de R$ 171,97</p>
                  </S.Preço>
             <Link to='/cart'>

            <S.Comprar><i class="im im-shopping-cart"></i>Comprar</S.Comprar>
            </Link>

            </S.Pneu>
    )
}