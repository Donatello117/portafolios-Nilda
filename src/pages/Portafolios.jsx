import "./Portafolios.css";
import negro1 from "../assets/vestidos/Negro 1.png";
import negro2 from "../assets/vestidos/Negro 2.png";
import rojo1 from "../assets/vestidos/Rojo 1.png";
import rojo2 from "../assets/vestidos/Rojo 2.png";
import rojo3 from "../assets/vestidos/Rojo 3.png";
import rojo4 from "../assets/vestidos/Rojo 4.png";
import rojo5 from "../assets/vestidos/Rojo 5.png";
import rojo6 from "../assets/vestidos/Rojo 6.png";
import rojo7 from "../assets/vestidos/Rojo 7.png";
import rojo8 from "../assets/vestidos/Rojo 8.png";
import rosa1 from "../assets/vestidos/Rosa 1.png";
import violeta1 from "../assets/vestidos/Violeta 1.png";
import violeta2 from "../assets/vestidos/Violeta 2.png";
import violeta3 from "../assets/vestidos/Violeta 3.png";
import violeta4 from "../assets/vestidos/Violeta 4.png";
import violeta5 from "../assets/vestidos/Violeta 5.png";
import azul1 from "../assets/vestidos/Azul 1.png";
import azul2 from "../assets/vestidos/Azul 2.png";
import azul3 from "../assets/vestidos/Azul 3.png";
import verde_agua1 from "../assets/vestidos/Verde agua 1.png";
import verde_agua2 from "../assets/vestidos/Verde agua 2.png";
import amarillo1 from "../assets/vestidos/Amarillo 1.png";
import blanco1 from "../assets/vestidos/Blanco 1.png";
import blanco2 from "../assets/vestidos/Blanco 2.png";
import blanco3 from "../assets/vestidos/Blanco 3.png";
import blanco4 from "../assets/vestidos/Blanco 4.png";


export const Portafolios = () => {
  return (
    <div className="container-portafolios">
      <h1>portafolios</h1>
      <div className="card-proy">
        {ImagenVestido.map(({ imagen }) => (
          <div className="card">
            <div className="imagen">{imagen}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

//orden: negro, rojo, rosa, violeta, azul, celeste, verde agua, verde, amarillo, naranja.
const ImagenVestido = [
  {
    imagen: <img src={negro1} className="Foto-vestido" />,
  },
  {
    imagen: <img src={negro2} className="Foto-vestido" />,
  },
  {
    imagen: <img src={rojo1} className="Foto-vestido" />,
  },
  {
    imagen: <img src={rojo2} className="Foto-vestido" />,
  },
  {
    imagen: <img src={rojo3} className="Foto-vestido" />,
  },
  {
    imagen: <img src={rojo4} className="Foto-vestido" />,
  },
  {
    imagen: <img src={rojo5} className="Foto-vestido" />,
  },
  {
    imagen: <img src={rojo6} className="Foto-vestido" />,
  },
  {
    imagen: <img src={rojo7} className="Foto-vestido" />,
  },
  {
    imagen: <img src={rojo8} className="Foto-vestido" />,
  },
  {
    imagen: <img src={rosa1} className="Foto-vestido" />,
  },
  {
    imagen: <img src={violeta1} className="Foto-vestido" />,
  },
  {
    imagen: <img src={violeta2} className="Foto-vestido" />,
  },
  {
    imagen: <img src={violeta3} className="Foto-vestido" />,
  },
  {
    imagen: <img src={violeta4} className="Foto-vestido" />,
  },
  {
    imagen: <img src={violeta5} className="Foto-vestido" />,
  },
  {
    imagen: <img src={azul1} className="Foto-vestido" />,
  },
  {
    imagen: <img src={azul2} className="Foto-vestido" />,
  },
  {
    imagen: <img src={azul3} className="Foto-vestido" />,
  },
  {
    imagen: <img src={verde_agua1} className="Foto-vestido" />,
  },
  {
    imagen: <img src={verde_agua2} className="Foto-vestido" />,
  },
  {
    imagen: <img src={amarillo1} className="Foto-vestido" />,
  },
  {
    imagen: <img src={blanco1} className="Foto-vestido" />,
  },
  {
    imagen: <img src={blanco2} className="Foto-vestido" />,
  },
  {
    imagen: <img src={blanco3} className="Foto-vestido" />,
  },
  {
    imagen: <img src={blanco4} className="Foto-vestido" />,
  },
];
