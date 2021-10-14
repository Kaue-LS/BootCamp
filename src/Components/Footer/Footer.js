import * as S from "./styled";

export default function Footer() {
  return (
    <div>
      <S.Footer>
          <S.ContainerMenu>
            <S.ContainerTitleMenu>
              <h3>INSTITUCIONAL</h3>
              <S.ContainerListItems>
                <ul>
                  <p>Garantia</p>
                </ul>
                <ul>
                  <p>Política de Privacidade</p>
                </ul>
                <ul>
                  <p>Regras do site e promoções</p>
                </ul>
                <ul>
                  <p>Trabalhe Conosco</p>
                </ul>
                <ul>
                  <p>Marcas</p>
                </ul>
              </S.ContainerListItems>
            </S.ContainerTitleMenu>
            <S.ContainerTitleMenu>
              <h3>AJUDA</h3>
              <S.ContainerListItems>
                <ul>
                  <p>Perguntas frequentes</p>
                </ul>
                <ul>
                  <p>Entrega</p>
                </ul>
                <ul>
                  <p>Troca e Desistência</p>
                </ul>
                <ul>
                  <p>Meus pedidos</p>
                </ul>
                <ul>
                  <p>Informações Técnicas do Pneus</p>
                </ul>
              </S.ContainerListItems>
            </S.ContainerTitleMenu>
            <S.ContainerTitleMenu>
              <h3>SERVIÇO</h3>
              <S.ContainerListItems>
                <ul>
                  <p>Entregas e Montagem Móvel</p>
                </ul>
                <ul>
                  <p>Seja um parceiro de serviços</p>
                </ul>
              </S.ContainerListItems>
            </S.ContainerTitleMenu>
            <S.ContainerTitleMenu>
              <h3>CENTRAL DE RELACIONAMENTO</h3>
              <S.ContainerListItems>
                <ul>
                  <p>
                    <strong>0800-602-2013</strong>
                  </p>
                </ul>
                <ul>
                  <p>(Ligações de telefone fixo - Chamada Gratuita)</p>
                </ul>
                <ul>
                  <p>
                    <strong>(47) 3046-2559</strong>
                  </p>
                </ul>
                <ul>
                  <p>
                    (Ligações de qualquer origem - Cobrança de Acordo com
                    Operadora)
                  </p>
                </ul>
              </S.ContainerListItems>
            </S.ContainerTitleMenu>
          </S.ContainerMenu>
        <S.ContainerMed>
          <S.ImageArea>
            <S.ContainerTitleMenu2>
              <h3>SEGURANÇA</h3>
              <S.ContainerMedImg>
                <img
                  src="https://www.pneustore.com.br/medias/sys_master/images/images/h8e/he6/9008694329374/compre-confie.png"
                  alt=""
                />
                <img
                  src="https://seal.globalsign.com/SiteSeal/images/gs_noscript_110-45_en.gif"
                  alt=""
                />
              </S.ContainerMedImg>
            </S.ContainerTitleMenu2>
          </S.ImageArea>
          <S.ImageArea>
            <S.ContainerTitleMenu2>
              <h3>AVALIAÇÕES</h3>
              <S.ContainerMedImg>
                <img
                  src="https://www.pneustore.com.br/medias/sys_master/images/images/h44/h77/8853243527198/reclame-aqui.png"
                  alt=""
                />
              </S.ContainerMedImg>
            </S.ContainerTitleMenu2>
          </S.ImageArea>
          <S.ImageArea>
            <S.ContainerTitleMenu2>
              <h3 className="social">REDES SOCIAIS</h3>
              <S.ContainerMedImg>
                <a
                  href="https://web.facebook.com/PneuStore/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icon"
                    src="https://static.pneustore.com.br/_ui/responsive/common/images/facebook.svg"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/pneustore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    className="icon"
                    src="https://static.pneustore.com.br/_ui/responsive/common/images/instagram.svg"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCy0OhkL_min2OoFiEykb-PA/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    className="icon"
                    src="https://static.pneustore.com.br/_ui/responsive/common/images/youtube.svg"
                    alt=""
                  />
                </a>
              </S.ContainerMedImg>
            </S.ContainerTitleMenu2>
          </S.ImageArea>
        </S.ContainerMed>
        <S.FormasPagamento>
          <p className="pgto">Formas de pagamento:</p>
          <img
            src="https://static.pneustore.com.br/_ui/responsive/common/images/bandeiras.png"
            alt=""
          />
          <p className="pgto">
            Parcele suas compras usando 2 cartões e pague em até{" "}
            <strong>6x sem juros</strong>
          </p>
        </S.FormasPagamento>

        <S.Copyrigth>
          <p>
            © 2019 PneuStore. CPX Distribuidora S/A. Rodovia SC 486 - Antonio
            Heil, 800 - Bairro Itaipava - CEP 88316001 - Itajaí/SC. CNPJ:
            10.158.356/0001-01.
          </p>
        </S.Copyrigth>
        {/* Footer Responsivo */}
      </S.Footer>
    </div>
  );
}
