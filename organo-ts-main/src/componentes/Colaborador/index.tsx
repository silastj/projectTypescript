import "./Colaborador.css";

interface ColaboradorProps {
  nome: string;
  imagem: string;
  cargo: string;
  corDeFundo: string;
  data: string;
}

const Colaborador = ({ nome, imagem, cargo,data, corDeFundo }: ColaboradorProps) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h6>{new Date(data).toLocaleDateString()}</h6>
      </div>
    </div>
  );
};

export default Colaborador;
