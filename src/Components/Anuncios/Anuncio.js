import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import * as S from './styled'

export function AnuncioP(){

   
    
    return(
        <S.AnuncioArea>
        <Carousel 
          showIndicators={true} 
          infiniteLoop 
          autoPlay
           showThumbs={false} 
           showArrows interval={5000} 
           showStatus={false}>
            <div>
                <img src= "https://static.pneustore.com.br/medias/sys_master/images/images/hef/ha7/9043275841566/Desk-Van.png" alt='' />
            </div>
            <div>
            <img src="https://static.pneustore.com.br/medias/sys_master/images/images/hd6/hfe/9043188613150/BANNER-DESK-10-OFF-PIRELLI.png" alt=''/>
            </div>
            <div>
            <img src="https://static.pneustore.com.br/medias/sys_master/images/images/hf8/h95/9041663918110/BANNER-DESK.png" alt=''/>
            </div>
            <div>
            <img src= "https://static.pneustore.com.br/medias/sys_master/images/images/h03/h01/9028898291742/MicrosoftTeams-image-6-.png" alt=''/>
            </div>
            <div>
            <img src= "https://static.pneustore.com.br/medias/sys_master/images/images/hc0/h51/9028317773854/DESCONTO-CARRINHO-CONTINENTAL.jpg" alt=''/>
            </div>
        </Carousel>
    </S.AnuncioArea>
    )
}
export function AnuncioM(){
    return(
        <S.AnuncioArea>
        <Carousel infiniteLoop autoPlay showThumbs={false} showArrows interval={5000} showStatus={false}>
            <div>
                <img src= "https://static.pneustore.com.br/medias/sys_master/images/images/hef/ha7/9043275841566/Desk-Van.png" alt=''/>
            </div>
            <div>
            <img src="https://static.pneustore.com.br/medias/sys_master/images/images/hd6/hfe/9043188613150/BANNER-DESK-10-OFF-PIRELLI.png" alt=''/>
            </div>
            <div>
            <img src="https://static.pneustore.com.br/medias/sys_master/images/images/hf8/h95/9041663918110/BANNER-DESK.png" alt=''/>
            </div>
            <div>
            <img src= "https://static.pneustore.com.br/medias/sys_master/images/images/h03/h01/9028898291742/MicrosoftTeams-image-6-.png" alt=''/>
            </div>
            <div>
            <img src= "https://static.pneustore.com.br/medias/sys_master/images/images/hc0/h51/9028317773854/DESCONTO-CARRINHO-CONTINENTAL.jpg" alt=''/>
            </div>
        </Carousel>
    </S.AnuncioArea>
    )
}