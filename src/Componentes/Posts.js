import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      usuario: { srcUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed" },
      conteudo: {
        tipo: "imagem",
        srcConteudo: "assets/img/gato-telefone.svg",
        alt: "gato-telefone",
      },
      curtidas: {
        srcCurtida: "assets/img/respondeai.svg",
        curtidoPor: "respondeai",
        qtdCurtidas: 101.523,
      },
    },
    {
      usuario: { srcUsuario: "assets/img/barked.svg", nomeUsuario: "barked" },
      conteudo: {
        tipo: "imagem",
        srcConteudo: "assets/img/dog.svg",
        alt: "cachorro",
      },
      curtidas: {
        srcCurtida: "assets/img/adorable_animals.svg",
        curtidoPor: "adorable_animals",
        qtdCurtidas: 99.159,
      },
    },
    {
      usuario: {
        srcUsuario: "assets/img/nathanwpylestrangeplanet.svg",
        nomeUsuario: "nathanwpylestrangeplanet",
      },
      conteudo: {
        tipo: "video",
        srcConteudo: [
          {
            srcVideo: "assets/video/video.mp4",
            tipoVideo: "video/mp4",
          },
          {
            srcVideo: "assets/video/video.ogv",
            tipoVideo: "video/ogv",
          },
        ],
        alt: "",
      },
      curtidas: {
        srcCurtida: "assets/img/wawawicomics.svg",
        curtidoPor: "wawawicomics",
        qtdCurtidas: 73.539,
      },
    },
  ];

  return (
    <div class="posts">
      {posts.map(({ usuario, conteudo, curtidas }) => (
        <Post usuario={usuario} conteudo={conteudo} curtidas={curtidas} />
      ))}
    </div>
  );
}
