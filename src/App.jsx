import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Allevents from './Components/Allevents'
import Liveevent from './Components/Liveevent'
import Header from './Header'

function App() {
   
  return(
    <>
          
         <Allevents/> 
         <Liveevent/>
    
    </>
  )
}

export default App
