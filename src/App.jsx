import { Link, Route, Routes } from "react-router-dom";
import { Button } from "./components/Button/Button";
import Rot13Content from "./components/Rot-13/Rot13Content";
import { Home } from "./components/Home/Home";
import { Rot13_0 } from "./components/Rot-13/Rot13_0";
import { Login } from "./components/Login/Login";
import { UserProvider, useUser } from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
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
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rot-13" element={<Rot13Content />} />
            <Route path="/rot-13/rot-13-0" element={<Rot13_0 />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
