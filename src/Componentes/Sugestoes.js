export default function Sugestoes() {
  const usuarios = [
    {
      fotoPerfil: "assets/img/bad.vibes.memes.svg",
      nomePerfil: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      fotoPerfil: "assets/img/chibirdart.svg",
      nomePerfil: "chibirdart",
      razao: "Segue você",
    },
    {
      fotoPerfil: "assets/img/razoesparaacreditar.svg",
      nomePerfil: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      fotoPerfil: "assets/img/adorable_animals.svg",
      nomePerfil: "adorable_animals",
      razao: "Segue você",
    },
    {
      fotoPerfil: "assets/img/smallcutecats.svg",
      nomePerfil: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {usuarios.map(({ fotoPerfil, nomePerfil, razao }) => (
        <div class="sugestao">
          <div class="usuario">
            <img src={fotoPerfil} alt="" />
            <div class="texto">
              <div class="nome">{nomePerfil}</div>
              <div class="razao">{razao}</div>
            </div>
          </div>
          <div class="seguir">Seguir</div>
        </div>
      ))}
    </div>
  );
}
