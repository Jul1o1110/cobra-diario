import { alertaRedireccion } from "../utils/alertas";
import { eliminarLocalStorage } from "../utils/local-storage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let redirection = useNavigate();
  function cerrarSesion() {
    eliminarLocalStorage("token");
    alertaRedireccion("Cerrando sesión", "info", "/", redirection);
  }
  return (
    <header>
      <span>JZ, Jaime Zapata</span>
      <span>admin</span>
      <nav>
        <a href="">Solicitudes</a>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
      </nav>
    </header>
  );
};

export default Header;
