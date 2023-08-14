import { NavBar } from "./components";
import { Inicio, Presentacion, Portafolios, Contacto } from "./pages";

export const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Inicio />
        <Presentacion />
        <Portafolios />
        <Contacto />
      </div>
  </div>
  );
};
