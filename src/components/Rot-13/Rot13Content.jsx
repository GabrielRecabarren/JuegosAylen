import { useState, useEffect  } from "react";
import { Button } from "../Button/Button";
import { rot13 } from "./rot13-js";

function Rot13Content() {
  const [level, setLevel] = useState(0);
  const [content, setContent] = useState("Bienvenida");

  const saludo = "Hola Aylen";
  const saludoRoteado = rot13(saludo);

  const levelUp = () => {
    setLevel(level+1);
    console.log(level)
  }

  
  
  return (
    <div>
      <h2>{level===0 ? saludoRoteado : saludo}</h2>
      <p>Bienvenid@ a este juego para aprender sobre Rot-13.</p>
      <h3> </h3>


      <Button btnName={"Lvl-1"} btnNum={"10"} onClick={()=> alert("hola")} />
    </div>
  );
}

export default Rot13Content;
