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
  const[pensamento,setPensamento] = useState('')
  const mudandoDePensamento =(e) =>{
    setTitle(e.pensamento.value)
  }

  const[probleminha,setProbleminha] = useState('')
  const mudandoDeProbleminha =(e) =>{
    setTitle(e.probleminha.value)
  } 
  const[utimaSerie,setUltimaSerie] = useState('')
  const mudandoDeUltimaSerie =(e) =>{
    setTitle(e.ultimaserie.value)
  }

  const[ultimoJogo,setUltimoJogo] = useState('')
  const mudandoDeUltimoJogo =(e) =>{
    setTitle(e.ultimoJogo.value)
  }

   const[musica,setMusica] = useState('')
  const mudandoDeMusica =(e) =>{
    setTitle(e.musica.value)
  }

  const[genero,setGenero] = useState('')
  const mudandoDeGenero =(e) =>{
    setTitle(e.genero.value)
  }
  const[HabilidadeEspecial,setHabilidadeEspecial] = useState('')
  const mudandoDeHabilidadeEspecial =(e) =>{
    setTitle(e.HabilidadeEspecial.value)
  }

  const[PoderEspecial,setPoderEspecial] = useState('')
  const mudandoDePoderEspecial =(e) =>{
    setTitle(e.poderEspeciale.value)
  }

  const[TimeQueTorce,setTimequeTorce] = useState('')
  const mudandoDetime =(e) =>{
    setTitle(e.time.value)
  }
  return (
    <>
    <div className='form'>

   <div>
      <label htmlFor='tituloid'>Nome </label>
      <input id='tituloid' type='text' name='Titulo' onChange={(e) => mudandoDeTitulo(e)}></input>

      <label htmlFor='dataid'>Idade</label>
      <input id='dataid' type='date' name='Data' onChange={(e) => mudandoDeData(e)}></input>

      <label htmlFor='telefoneid'>Telefone</label>
      <input id='telefoneid' type='number' name='Telefone' onChange={(e) => mudandoDeTelefone(e)}></input>

      <label htmlFor='instagramId'>Instagran</label>
      <input id='instagramId' type='text' name='Instagram' onChange={(e) => mudandoDeInstagram(e)}></input>
    </div>


    <div> 
      <label htmlFor='GitHubId'>GitHub</label>
      <input id='GitHubId' type='text' name='GitHub' onChange={(e) => mudandoDeGitHub(e)}></input>

      <label htmlFor='PensamentoId'>Pensamento</label>
      <input id='pensamnetoId' type='text' name='Pensamento' onChange={(e) => mudandoDePensamento(e)}></input>

      <label htmlFor='ProbleminhaId'>Probleminha</label>
      <input id='ProbleminhaId' type='text' name='Probleminha' onChange={(e) => mudandoDeProbleminha(e)}></input>

      <label htmlFor='UltimaSerieId'>Ultima Serie</label>
      <input id='UltimaSerie' type='text' name='UltimaSerie' onChange={(e) => mudandoDeUltimaSerie (e)}></input>
    </div>


      <div>
        <div style={{margin:"10px"}}>
      <label htmlFor='UltimoJogoId'>Ultimo Jogo</label>
      <input id='UltimoJogoId' type='text' name='UltimoJogo' onChange={(e) => mudandoDeUltimoJogo (e)}></input>
        </div>
      <div style={{margin:"10px"}}>
      <label htmlFor='Musica'>Musica</label>
      <input id='Musica' type='text' name='Musica' onChange={(e) => mudandoDeMusica (e)}></input>
</div>
      <div style={{margin:"10px"}}>
      <label htmlFor='GeneroId'>Genero</label>
      <input id='GeneroId' type='text' name='Genero' onChange={(e) => mudandoDeGenero (e)}></input>
</div>
<div style={{margin:"10px"}}>
      <label htmlFor='HabilidadeEspecialId'>Habilidade Especial</label>
      <input id='HabilidadeEspecialId' type='text' name='HabilidadeEspecial' onChange={(e) => mudandoDeHabilidadeEspecial (e)}></input>
  </div>
  </div>

    <div>
      <label htmlFor='PoderEspecialId'>Poder Especial</label>
      <input id='PoderEspecialId' type='text' name='PoderEspecial' onChange={(e) => mudandoDePoderEspecial (e)}></input>

      <label htmlFor='TimequeTorceId'>Time que Torce </label>
      <input id='TimequeTorceId' type='text' name='timequeTorce' onChange={(e) => mudandoDetime (e)}></input>
    </div>

      </div>
    </>
  )
}

export default App
