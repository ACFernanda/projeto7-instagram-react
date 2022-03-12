export default function ConteudoPost({ tipo, srcConteudo, alt }) {
  return (
    <div class="conteudo">
      {tipo === "imagem" ? (
        <img src={srcConteudo} alt={alt} />
      ) : (
        <video autoplay muted loop>
          {srcConteudo.map(({ srcVideo, tipoVideo }) => (
            <source src={srcVideo} type={tipoVideo} />
          ))}
          Seu navegador não suporta vídeos.
        </video>
      )}
    </div>
  );
}
