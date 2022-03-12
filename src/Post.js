import TopoPost from "./TopoPost";
import ConteudoPost from "./ConteudoPost";
import FundoPost from "./FundoPost";

export default function Post({ usuario, conteudo, curtidas }) {
  return (
    <div class="post">
      <TopoPost
        srcUsuario={usuario.srcUsuario}
        nomeUsuario={usuario.nomeUsuario}
      />
      <ConteudoPost
        tipo={conteudo.tipo}
        srcConteudo={conteudo.srcConteudo}
        alt={conteudo.alt}
      />
      <FundoPost
        srcCurtida={curtidas.srcCurtida}
        curtidoPor={curtidas.curtidoPor}
        qtdCurtidas={curtidas.qtdCurtidas}
      />
    </div>
  );
}
