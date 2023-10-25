import { useState } from 'react'
import Header from './components/Header'
import Results from './components/Results'
import UserInput from './components/UserInput'
import './App.css'

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});

function handleChange(inputIdentifier,newValue){
    setUserInput(prevState=>{
        return {
            ...prevState,
            [inputIdentifier]:+newValue
        }
    })
}
  const validInput = userInput.duration >= 1;
  return (
    <>
     <Header/>
     <UserInput userInput={userInput} onHandleChange={handleChange}/>
     {!validInput && <p className='center'>duration must be greater than 0</p>}
     { validInput && <Results userInput={userInput}/>}
    </>
  )
}

export default App
