import { Form } from "react-router-dom"

export const Rot13_0 = () => {
  return (
    <form>
    <ul>
      <li>Es una forma de codificar mensajes</li>
      <li>Codificar un mensaje = Esconder el significado del mensaje a través de una regla oculta</li>
    </ul>
    
    <p>'¿Cuál será la regla de Rot-13? (Pista : su nombre tiene la clave)'</p>
    <label htmlFor="option1">Rotula número 13</label>
    <input type="checkbox" />
    <input type="submit" value="Enviar"/  >

    
    </form>
  )
}
