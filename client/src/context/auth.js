import {useState, useEffect, useContext, createContext} from 'react'

const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [auth,setAuth] = useState({
    user:null,
    token:""
})
useEffect(() => {
    const data = localStorage.getItem("auth");
    if(data){
        const paraseData = JSON.parse(data);
        setAuth({
            ...auth,
            user:paraseData.user,
            token:paraseData.token,
        });
    }
}, [auth]);

return(
    <AuthContext.Provider value ={[auth,setAuth]}>
        {children}
    </AuthContext.Provider>
)
}

//custom hook

const useAuth =() => useContext(AuthContext)
export {useAuth,AuthProvider}