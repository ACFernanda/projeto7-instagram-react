export default function Curtidas({ srcCurtidas, curtidoPor, qtdCurtidas }) {
  return (
    <div class="curtidas">
      <img src={srcCurtidas} alt="" />
      <div class="texto">
        Curtido por <strong>{curtidoPor}</strong> e{" "}
        <strong>outras {qtdCurtidas} pessoas</strong>
      </div>
    </div>
  );
}
