import { useContext } from "react"
import { useUser } from "../../Context/UserContext"
export const Home = () => {
  const {user} = useUser();
  return (
    <div>Bienvenid@ {user}</div>
  )
}
