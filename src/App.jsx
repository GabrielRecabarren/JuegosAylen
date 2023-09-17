import { Link, Route, Routes } from "react-router-dom";
import { Button } from "./components/Button/Button";
import Rot13Content from "./components/Rot-13/Rot13Content";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div>
      <Link to={"/home"}>
        <Button btnName={"Inicio"} btnNum={"2"}></Button>
      </Link>
      <h1 className="title">Botones</h1>
      <div className="container">
        <Link to={"/rot-13"}>
          <Button btnName={"Rot-13"} btnNum={"1"} />
        </Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/rot-13" element={<Rot13Content />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
