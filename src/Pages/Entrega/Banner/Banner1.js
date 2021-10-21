import * as S from './Styled'
export function Banner1(){
    return(
        <div>
            <S.Container>
                <S.Banner>
                <S.Fechar><strong>X</strong></S.Fechar>
                    <S.Text>Se você mora nos estados de São Paulo e Santa Catarina, para sua comodidade a PneuStore oferece também o serviço de montagem PneuStore Móvel, onde você escolhe o pneu, e nós montamos em sua casa. Se você não mora em nenhum desses estados, aguarde, em breve a PneuStore terá novidades...</S.Text>
                    <S.Image src="https://static.pneustore.com.br/medias/sys_master/images/images/hef/ha7/9043275841566/Desk-Van.png"></S.Image>
                </S.Banner>
            </S.Container>
        </div>
    )
}


export function Banner2(){
    return(
            <S.Banner>
                Entregar e montar em um Centro de Montagem
            </S.Banner>
    )

}

export function Banner3(){
    return(
            <S.Banner>
                Entregar no meu endereço
            </S.Banner>
    )

}