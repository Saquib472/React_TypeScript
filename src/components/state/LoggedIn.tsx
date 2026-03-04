//Most of the time we don't have to explicitly typed useState Hook. The type inference will handle.

import { useState } from "react"

const LoggedIn = () => {
    const [loggedIn , setLoggedIn] = useState(false)
  return (
    <div>
        <button onClick={()=>setLoggedIn(true)}>Log In</button>
        <button onClick={()=>setLoggedIn(false)}>Log Out</button>
        <h1>{loggedIn ? 'Hey User' : 'Hey guest'}</h1>
    </div>
  )
}

export default LoggedIn