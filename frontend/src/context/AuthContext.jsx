import {  createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}


// authProvider

export const AuthProvider = ({Children}) => {
    const [currentuser, setcurrentUser] = useState(null)
    const [loading, setloading] = useState(true)

    // register a user
    const registerUser = async () => {

    }

    const value = {

    }
    return (
        <AuthContext.Provider value={value}>
            {Children}
        </AuthContext.Provider>
    )
}


const bitt