export default function TopoPost({ srcUsuario, nomeUsuario }) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={srcUsuario} />
        {nomeUsuario}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
