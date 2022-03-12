import Acoes from "./Acoes";
import Curtidas from "./Curtidas";
import NovoComentario from "./NovoComentario";

export default function FundoPost({ srcCurtida, curtidoPor, qtdCurtidas }) {
  return (
    <div class="fundo">
      <Acoes />
      <Curtidas
        srcCurtidas={srcCurtida}
        curtidoPor={curtidoPor}
        qtdCurtidas={qtdCurtidas}
      />
      <NovoComentario />
    </div>
  );
}
