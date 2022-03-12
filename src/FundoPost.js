export default function FundoPost({ srcCurtida, curtidoPor, qtdCurtidas }) {
  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={srcCurtida} alt="" />
        <div class="texto">
          Curtido por <strong>{curtidoPor}</strong> e{" "}
          <strong>outras {qtdCurtidas} pessoas</strong>
        </div>
      </div>
      <div class="novo-comentario">
        <ion-icon class="icone-comentario" name="happy-outline"></ion-icon>
        <input
          class="caixa-comentario"
          type="text"
          name="input"
          placeholder="Novo comentário..."
        />
        <input type="button" value="Publicar" />
      </div>
    </div>
  );
}
