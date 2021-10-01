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
                                <li>Garantia</li>
                                <li>Política de Privacidade</li>
                                <li>Regras do site e promoções</li>
                                <li>Trabalhe Conosco</li>
                                <li>Marcas</li>
                            </S.ContainerListItems>
                        </S.ContainerTitleMenu>
                        <S.ContainerTitleMenu>
                            <h3>AJUDA</h3>
                            <S.ContainerListItems>
                                <li>Perguntas frequentes</li>
                                <li>Entrega</li>
                                <li>Troca e Desistência</li>
                                <li>Meus pedidos</li>
                                <li>Informações Técnicas do Pneus</li>
                            </S.ContainerListItems>
                        </S.ContainerTitleMenu>
                        <S.ContainerTitleMenu>
                            <h3>SERVIÇO</h3>
                            <S.ContainerListItems>
                                <li>Entregas e Montagem Móvel</li>
                                <li>Seja um parceiro de serviços</li>
                            </S.ContainerListItems>
                        </S.ContainerTitleMenu>
                        <S.ContainerTitleMenu>
                            <h3>CENTRAL DE RELACIONAMENTO</h3>
                            <S.ContainerListItems>
                                <li>0800-602-2013</li>
                                <li>(Ligações de telefone fixo - Chamada Gratuita)</li>
                                <li>(47) 3046-2559</li>
                                <li>(Ligações de qualquer origem - Cobrança de Acordo com Operadora)</li>
                            </S.ContainerListItems>
                        </S.ContainerTitleMenu>
                    </S.ContainerMenu>
                </S.ContainerTop>
                <S.ContainerMed>
                    <S.ContainerTitleMenu2>
                        <h3>SEGURANÇA</h3>
                        <S.ContainerMedImg src="https://tse3.mm.bing.net/th?id=OIP.Eu698TjsXcSk8b008ZdthwHaHa&pid=Api&P=0&w=300&h=300">
                        </S.ContainerMedImg>
                    </S.ContainerTitleMenu2>
                    <S.ContainerTitleMenu2>
                        <h3>AVALIAÇÕES</h3>
                    </S.ContainerTitleMenu2>
                    <S.ContainerTitleMenu2>
                        <h3>REDES SOCIAIS</h3>
                    </S.ContainerTitleMenu2>
                </S.ContainerMed>


                {/* Footer Responsivo */}
            </S.Footer>
        </div>
    )
}

