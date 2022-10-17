import "./PubliPerfil.css";
import Publi from "./Publi";

function PubliPerfil() {
  return (
    <div className="tudo">
      <div className="container_publi">
        <div className="container_1">
          <p className="text-container">Bom dia, Arthur!</p>
          <p className="text-container2">
            Recados (2) Fotos (10) Vídeos (3) Fãs (15)
          </p>
          <p className="text-bold">Seus Visitantes recentes:</p>
          <p className="text-container3">Semana Passada: 30 | Total de visitantes 1.9k</p>
          <div className="pessoas">
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
            <div className="pessoa"></div>
          </div>
          <p className="text-container4"><strong>Sorte de hoje:</strong> A sorte e o amor preferem os corajosos!</p>
        </div>
      </div>
      <div className="container-2">
        <p className="text-container5">O Orkut fica mais legal com os seus amigos. Compartilhe!</p>
      </div>
      <Publi/>
    </div>
  );
}

export default PubliPerfil;
