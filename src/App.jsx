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

  const[instagram,setInstagram] = useState('')
  const mudandoDeInstagram =(e) =>{
    setTitle(e.instagram.value)
  }

  const[GitHub,setGitHub] = useState('')
  const mudandoDeGitHub =(e) =>{
    setTitle(e.GitHub.value)
  }
  return (
    <>
    <div className='form'>
      <label htmlFor='tituloid'>Nome </label>
      <input id='tituloid' type='text' name='Titulo' onChange={(e) => mudandoDeTitulo(e)}></input>

      <label htmlFor='dataid'>Idade</label>
      <input id='dataid' type='date' name='Data' onChange={(e) => mudandoDeData(e)}></input>

      <label htmlFor='telefoneid'>Telefone</label>
      <input id='telefoneid' type='number' name='Telefone' onChange={(e) => mudandoDeTelefone(e)}></input>

      
      <label htmlFor='instagramId'>Instagran</label>
      <input id='instagramId' type='text' name='Instagram' onChange={(e) => mudandoDeInstagram(e)}></input>
      
      <label htmlFor='GitHubId'>GitHub</label>
      <input id='GitHubId' type='text' name='GitHub' onChange={(e) => mudandoDeGitHub(e)}></input>
      </div>
    </>
  )
}

export default App
