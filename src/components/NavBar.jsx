import "./NavBar.css";
import logo from "../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
export const NavBar = () => {
  return (
    <div className="Container-navbar">
      <div className="nav">
        <input type="checkbox" id="select" />
        <label for="select" className="select-btn"><AiOutlineMenu /></label>
        <img src={logo} className="logo-image" />
        <div className="nav-menu">
          <li className="nav-menu-item">
            <a className="nav-menu-item-a" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-item-a" href="#">
              Presentacion
            </a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-item-a" href="#">
              Portafolio
            </a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-item-a" href="#">
              Contactos
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};
