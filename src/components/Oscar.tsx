import type React from "react"

type OscaProps = {
    children : React.ReactNode
}

const Oscar = (props : OscaProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Oscar