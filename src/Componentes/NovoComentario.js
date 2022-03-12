export default function NovoComentario() {
  return (
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
  );
}
