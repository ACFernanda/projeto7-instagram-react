export default function Usuario() {
  const usuarioPrincipal = [
    {
      fotoPerfil: "assets/img/catanacomics.svg",
      nomePerfil: "catanacomics",
      nomeUsuario: "Catana",
    },
  ];

  return usuarioPrincipal.map(({ fotoPerfil, nomePerfil, nomeUsuario }) => (
    <div class="usuario">
      <img src={fotoPerfil} alt="" />
      <div class="texto">
        <strong>{nomePerfil}</strong>
        {nomeUsuario}
      </div>
    </div>
  ));
}
