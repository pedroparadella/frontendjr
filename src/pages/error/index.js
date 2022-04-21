import { Link } from "react-router-dom";
import notfound from "../../img/notfound.png";
import { ContainerError } from "./estilos";

export default function Error() {
  return (
    <ContainerError>
      <img src={notfound} alt="error" />
      <h1>Página não encontrada!</h1>
      <Link to="/">Voltar para home</Link>
    </ContainerError>
  );
}
