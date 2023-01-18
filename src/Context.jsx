import { createContext, useState } from "react";

export const MyContext = createContext({});

export const Provider = ({children}) => {
    const [fotos, setFotos] = useState([]);
    const globalState = {fotos, setFotos};
    
    return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
}