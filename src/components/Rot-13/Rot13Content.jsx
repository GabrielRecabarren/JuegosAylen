import { useState } from "react";
import { rot13 } from "./rot13-js";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

function Rot13Content() {
  const [encoded, setEncoded] = useState(true);

  const saludo = "Hola Aylen";
  const saludoRoteado = rot13(saludo);

  return (
    <div>
      <h2 onClick={()=>setEncoded(!encoded)}>{encoded ? saludoRoteado : saludo}</h2>
      <p>Bienvenid@ a este juego para aprender sobre Rot-13.</p>
      <Link to={"/rot-13/rot-13-0"}>
        <Button btnName={"Qué es ?"} btnNum={10} ></Button>
      </Link>
    </div>
  );
}
export default Rot13Content;
