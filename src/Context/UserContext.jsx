import { createContext, useContext, useState } from "react";

//Creo el contexto del usuario
const UserContext = createContext();

//Proveedor del usuario
export const UserProvider= ({children}) =>{
    const [user, setUser] = useState(null);



    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};
//Función para usar el usuario
export const useUser = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error('useUser debe ser usado dentro de un UseProvider')
    }
    return context;
};

