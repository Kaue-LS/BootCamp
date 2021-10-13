import * as S from '../styled'
import { Rating } from '@mui/material';
import { Api } from '../../../Components/Api/Api';
import { useHistory } from 'react-router';
export default function Pneu({pneu}){

 
  const history=useHistory()
  const submitHandler = async event => {

    event.preventDefault();

    const request = await Api.buildApiPutRequest(Api.PostCart(), pneu)
    .catch(e => {
      console.error('Erro ao tentar adicionar o item ao banco: ', e);
    })
    const result= await request.json()


    history.push(`/cart`,result);

  }

    return(
<S.Pneu>
  {/* Area do Pneu */}
  {/* Image */}
              <div>
                <img
                  className="pneu"
                  src="https://static.pneustore.com.br/medias/sys_master/images/images/hee/ha2/8860120940574/jogo-de-4pneus-firestone-aro-15-f-600-195-55r15-85h-1.jpg"
                  alt=""
                />
              </div>

              {/* Descrição */}
              <S.Desc>
              <p>{pneu.productName} </p>
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

              {/* Selos */}
              <S.Selos>
                  
                  <S.ImageSelos src='https://static.pneustore.com.br/medias/sys_master/images/images/hcd/h6d/8862548164638/premium.svg' alt='Premium'/>
                
                
                  <S.ImageSelos src='https://static.pneustore.com.br/medias/sys_master/images/images/h53/h07/8862547640350/alta-kilometragem.svg' alt='Alta Kilometragem'/>
                  
                  
                  <S.ImageSelos src='https://static.pneustore.com.br/medias/sys_master/images/images/h06/ha3/8862548623390/simetrico.svg' alt='Simetrico'/>
                
              </S.Selos>

              {/* Preço */}
              <S.Preço>
                  <p><span>{(pneu.unitPrice).toFixed(2)}</span> à vista ou 6x de R$ 171,97</p>
                  </S.Preço>

            <S.Comprar  onClick={submitHandler} ><i className="im im-shopping-cart"></i>Comprar</S.Comprar>
            </S.Pneu>
    )
}