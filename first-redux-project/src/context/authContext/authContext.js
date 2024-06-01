import { createContext,useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

const Context =createContext();

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(() => {
        const storedUser = Cookies.get('name');
        return storedUser || false;
      });

    const data ={user,setUser}
    useEffect(() => {
        Cookies.set('user', JSON.stringify(user), { expires: 7, path: '' })
      }, [user]);

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
export const useAuth=()=>useContext(Context)
