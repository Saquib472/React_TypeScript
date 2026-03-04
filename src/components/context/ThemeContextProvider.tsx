import { theme } from "../../utils/Theme";
import { ThemeContext } from "./ThemeContext";

type ThemeContextProviderProps = {
    children : React.ReactNode
}


export const ThemeContextProvider = ({children} : ThemeContextProviderProps)=>{
    return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}