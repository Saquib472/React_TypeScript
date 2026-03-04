import { useState } from "react"

type AuthUser = {
    name : string
    email : string
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    // Type Assertion : When you know the value will be the future value immidietly after render and never change.
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleUserLogIn = ()=>{
        setUser({
            name : 'Saquib',
            email : 'sauibali@gmail.com'
        })
    }
    const handleUserLogOut = ()=>{
        setUser(null)
    }

  return (
    <div>
        <button onClick={handleUserLogIn}>log In</button>
        <button onClick={handleUserLogOut}>log Out</button>
        <div>User is {user?.name}</div>
        <div>User's email is {user?.email}</div>
    </div>
  )
}

export default User