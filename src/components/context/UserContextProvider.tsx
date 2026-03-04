import { useState } from "react"
import { UserContext, type AuthUserType } from "./UserContext"

type UserContextProviderProps = {
    children : React.ReactNode
}

const UserContextProvider = ({children} : UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUserType | null>(null)
  return (
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider