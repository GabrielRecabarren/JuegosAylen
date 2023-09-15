import { Button } from "../Button/Button";
import { rot13 } from "./rot13-js";

function Rot13Content() {
  const saludo = "Hola Aylen";
  const saludoRoteado = rot13(saludo);
  return (
    <div>
      <h2>{saludoRoteado}</h2>
      <p>Bienvenid@ a este juego para aprender sobre Rot-13.</p>

      <Button btnName={"Inicio"} btnNum={"2"} />
    </div>
  );
}

export default Rot13Content;
