import "./NavBar.css";
import logo from "../assets/Logo.png";


export const NavBar = () => {
  return (
    <div className="Container-navbar">
      <div className="nav-bar">
        <img src={logo} className="logo-image" />
        <div className="nav">
          <div className="menu">
            <li className="menu-item">Sobre mi</li>
            <li className="menu-item">Servicios</li>
            <li className="menu-item">Contacto</li>
          </div>
        </div>
      </div>
    </div>
  );
};
