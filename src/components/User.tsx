import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const User = () => {
    const {user , setUser} = useContext(UserContext)
    const handleLogIn = ()=>{
        setUser({
            name : 'Saquib',
            email : 'saquibali@gmail.com'
        })
    }
    const handleLogOut = ()=>{
        setUser(null)
    }
  return (
    <>
        <button onClick={handleLogIn}>LogIn</button>
        <button onClick={handleLogOut}>LogOut</button> 
        <div>User is {user?.name}</div>
        <div>User's Email is {user?.email}</div>
    </>
  )
}

export default User