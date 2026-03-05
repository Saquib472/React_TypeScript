import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import { Input } from './components/Input'
import Container from './components/Container'
import { ThemeContextProvider } from './components/context/ThemeContextProvider'
import UserContextProvider from './components/context/UserContextProvider'
import User from './components/User'
import { Counter } from './components/class/Counter'

function App() {
  const [inputValue, setInputValue] = useState('')
  const person = {
    first : 'Saquib',
    last : 'Ali'
  }

  const nameList = [
    {
      first : 'Saquib',
      last : 'Ali'
    },
    {
      first : 'Najmush',
      last : 'Sk'
    },
    {
      first : 'Bailando',
      last : 'Des'
    }
  ]

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Greet name='Saquib' messageCount={10} isLoggedIn={true} />
        <Person name={person} />
        <PersonList nameList= {nameList} />
        <Status status='success' />
        <Heading>PlaceHolder Text</Heading>
        <Oscar>
          <Heading>Hello I am Oscar btw.</Heading>
        </Oscar>
        <Greet name='Najmush' isLoggedIn={true} />
        <Button handleButtonClick={(e, id)=>{
          console.log('Button Clicked', e, id)
        }} />
        <Input value={inputValue} handleInputChange={(event)=> {
          setInputValue(event.target.value)
        }} />
        <Container styles={{border : '1px solid red', padding : '1rem'}} />
        <User />
        <Counter message='Hey There I am from Class Based Component' />
      </ThemeContextProvider>
    </UserContextProvider>
  )
}

export default App
