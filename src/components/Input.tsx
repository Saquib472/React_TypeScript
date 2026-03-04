type InputProps = {
    value : string
    handleInputChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value , handleInputChange} : InputProps) => {
  return (
    <input value={value} onChange={(event => handleInputChange(event))}/>
  )
}
