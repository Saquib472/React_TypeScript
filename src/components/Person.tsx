import { useContext } from "react"
import type { PersonProps } from "../utils/PersonName.types"
import { ThemeContext } from "./context/ThemeContext"

const Person = (props : PersonProps) => {
  const {primary} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor : primary.background , color : primary.color}}>{props.name.first} {props.name.last}</div>
  )
}

export default Person