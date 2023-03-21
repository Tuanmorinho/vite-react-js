import { createContext, ReactNode, useState } from "react";

interface IPropsAuthContextProvider {
    children: ReactNode;
}

export const AuthContext = createContext({});

export const AuthProvider = (props: IPropsAuthContextProvider) => {
    const [auth, setAuth] = useState({});
    
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { props.children }
        </AuthContext.Provider>
    )
}