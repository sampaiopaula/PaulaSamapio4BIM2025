import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const[title,setTitle] = useState('')
  const mudandoDeTitulo =(e) =>{
    setTitle(e.title.value)
  }
  const[dataNas,setDataNas] = useState('')
  const mudandoDeData =(e) =>{
    setTitle(e.dataNas.value)
  }
  const[telefone,setTelefone] = useState('')
  const mudandoDeTelefone =(e) =>{
    setTitle(e.telefone.value)
  }
  return (
    <>
    <div className='form'>
      <label htmlFor='tituloid'>Nome </label>
      <input id='tituloid' type='text' name='Titulo' onChange={(e) => mudandoDeTitulo(e)}></input>

      <label htmlFor='dataid'>Idade</label>
      <input id='dataid' type='date' name='Data' onChange={(e) => mudandoDeData(e)}></input>

      <label htmlFor='telefoneid'>Telefone</label>
      <input id='telefoneid' type='nunber' name='Telefone' onChange={(e) => mudandoDeTelefone(e)}></input>
      </div>
    </>
  )
}

export default App
