import { useUser } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export const Login = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleUserNameChange = (event) => {
    const newUser = event.target.value;
    setUser(newUser);
    console.log(newUser);
    
  };

  return (
    <>
      <div className={s.background}>
        <div className={s.shape}></div>
        <div className={s.shape}></div>
      </div>
      <form>
        <h3>Ingresa tus datos</h3>

        <label htmlFor="username">Nombre</label>
        <input
          type="text"
          placeholder="Escribe el nombre que quieras usar"
          id="username"
          onChange={handleUserNameChange}
        />
        {user && `Bievenid@  ${user}`}
        <button onClick={()=>navigate('/home')}>Ingresar</button>
      </form>
    </>
  );
};
