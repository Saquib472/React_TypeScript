import { createContext } from "react";

export type AuthUserType = {
    name : string
    email : string
}

type UserContextType = {
    user : AuthUserType | null
    setUser : React.Dispatch<React.SetStateAction<AuthUserType | null>>
} 

export const UserContext = createContext({} as UserContextType)