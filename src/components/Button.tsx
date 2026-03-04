type ButtonProps = {
    handleButtonClick : (event : React.MouseEvent<HTMLButtonElement> , id : string) => void
}

const Button = (props : ButtonProps) => {
  return (
    <button onClick={(event)=> props.handleButtonClick(event, '10')}>Submit</button>
  )
}

export default Button