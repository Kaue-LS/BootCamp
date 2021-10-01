import * as S from "./styled";

export default function Footer() {
    return(
        <div>
            <S.Footer>
                
                <S.ContainerTop>
                    <S.ContainerMenu>
                        <S.ContainerTitleMenu>
                            <h3>INSTITUCIONAL</h3>
                            <S.ContainerListItems>
                                <ul><li>Garantia</li></ul>
                                <ul><li>Política de Privacidade</li></ul>
                                <ul><li>Regras do site e promoções</li></ul>
                                <ul><li>Trabalhe Conosco</li></ul>
                                <ul><li>Marcas</li></ul>
                            </S.ContainerListItems>
                        </S.ContainerTitleMenu>
                        <S.ContainerTitleMenu>
                            <h3>AJUDA</h3>
                            <S.ContainerListItems>
                                <ul><li>Perguntas frequentes</li></ul>
                                <ul><li>Entrega</li></ul>
                                <ul><li>Troca e Desistência</li></ul>
                                <ul><li>Meus pedidos</li></ul>
                                <ul><li>Informações Técnicas do Pneus</li></ul>
                            </S.ContainerListItems>
                        </S.ContainerTitleMenu>
                        <S.ContainerTitleMenu>
                            <h3>SERVIÇO</h3>
                            <S.ContainerListItems>
                                <ul><li>Entregas e Montagem Móvel</li></ul>
                                <ul><li>Seja um parceiro de serviços</li></ul>
                            </S.ContainerListItems>
                        </S.ContainerTitleMenu>
                        <S.ContainerTitleMenu>
                            <h3>CENTRAL DE RELACIONAMENTO</h3>
                            <S.ContainerListItems>
                                <ul><li>0800-602-2013</li></ul>
                                <ul><li>(Ligações de telefone fixo - Chamada Gratuita)</li></ul>
                                <ul><li>(47) 3046-2559</li></ul>
                                <ul><li>(Ligações de qualquer origem - Cobrança de Acordo com Operadora)</li></ul>
                            </S.ContainerListItems>
                        </S.ContainerTitleMenu>
                    </S.ContainerMenu>
                </S.ContainerTop>
                <S.ContainerMed>
                
                <S.ImageArea>
                    <S.ContainerTitleMenu2>
                        <h3>SEGURANÇA</h3>
                        <S.ContainerMedImg >
                            <img src="https://www.pneustore.com.br/medias/sys_master/images/images/h8e/he6/9008694329374/compre-confie.png" alt=''/>
                            <img src='https://seal.globalsign.com/SiteSeal/images/gs_noscript_110-45_en.gif' alt=''/>
                        </S.ContainerMedImg>
                    </S.ContainerTitleMenu2>
                    </S.ImageArea>
                    <S.ImageArea>
                    <S.ContainerTitleMenu2>
                        <h3>AVALIAÇÕES</h3>
                        <S.ContainerMedImg>
                            <img src='https://www.pneustore.com.br/medias/sys_master/images/images/h44/h77/8853243527198/reclame-aqui.png' alt=''/>
                        </S.ContainerMedImg>
                    </S.ContainerTitleMenu2>
                    </S.ImageArea>
                    <S.ImageArea>
                    <S.ContainerTitleMenu2>
                        <h3 className='social'>REDES SOCIAIS</h3>
                        <S.ContainerMedImg>
                            <a href='https://web.facebook.com/PneuStore/?_rdc=1&_rdr' target='_blank'rel="noreferrer" ><img className='icon' src='https://static.pneustore.com.br/_ui/responsive/common/images/facebook.svg' alt=''/></a>
                            <a href='https://www.instagram.com/pneustore/' target='_blank'rel="noreferrer" >  <img className='icon' src='https://static.pneustore.com.br/_ui/responsive/common/images/instagram.svg' alt=''/></a>
                            <a href='https://www.youtube.com/channel/UCy0OhkL_min2OoFiEykb-PA/' target='_blank'rel="noreferrer" > <img className='icon' src='https://static.pneustore.com.br/_ui/responsive/common/images/youtube.svg' alt=''/></a>

                        </S.ContainerMedImg>
                    </S.ContainerTitleMenu2>
                    </S.ImageArea>

                </S.ContainerMed>
                <S.FormasPagamento>
                    <p>Formas de pagamento:</p>
                    <img src='https://static.pneustore.com.br/_ui/responsive/common/images/bandeiras.png'alt=''/>
                    <p>Parcele suas compras usando 2 cartões e pague em até <strong>6x sem juros</strong></p>
                </S.FormasPagamento>

                <S.Copyrigth>
                    <p>© 2019 PneuStore. CPX Distribuidora S/A. Rodovia SC 486 - Antonio Heil, 800 - Bairro Itaipava - CEP 88316001 - Itajaí/SC. CNPJ: 10.158.356/0001-01.</p>
                </S.Copyrigth>
                {/* Footer Responsivo */}
            </S.Footer>
        </div>
    )
}

