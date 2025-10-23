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
    <div className='Form'>
    <div className='formulario'>

   <div>
    <div style={{margin:"10px"}}>
      <label htmlFor='tituloid'>Nome </label>
      <input className='caixa' id='tituloid' type='text' name='Titulo'placeholder="Digite seu nome completo" onChange={(e) => mudandoDeTitulo(e)}></input>
  </div>

    <div style={{margin:"10px"}}>
      <label htmlFor='dataid'>Idade</label>
      <input className='caixa' id='dataid' type='date' name='Data' onChange={(e) => mudandoDeData(e)}></input>
      </div>

    <div style={{margin:"10px"}}>
      <label htmlFor='telefoneid'>Telefone</label>
      <input  className='caixa' id='telefoneid' type='number' name='Telefone' placeholder="Ex: 319666666" onChange={(e) => mudandoDeTelefone(e)}></input>
    </div>

    <div style={{margin:"10px"}}>       
      <label htmlFor='instagramId'>Instagran</label>
      <input className='caixa' id='instagramId' type='text' name='Instagram' placeholder="@exemplo_20"  onChange={(e) => mudandoDeInstagram(e)}></input>
    </div>  
    </div>  


    <div> 
      <div style={{margin:"10px"}}>
      <label htmlFor='GitHubId'>GitHub</label>
      <input  className='caixa' id='GitHubId' type='text' name='GitHub' placeholder="Ex: github.com/paulasampaio" onChange={(e) => mudandoDeGitHub(e)}></input>
      </div>

      <div style={{margin:"10px"}}>
      <label htmlFor='PensamentoId'>Pensamento</label>
      <input className='caixa' id='pensamnetoId' type='text' name='Pensamento' placeholder='Ex:A vida e tão bela' onChange={(e) => mudandoDePensamento(e)}></input>
    </div>

    <div style={{margin:"10px"}}>
      <label htmlFor='ProbleminhaId'>Probleminha</label>
      <input className='caixa' id='ProbleminhaId' type='text' name='Probleminha'placeholder='Ex: Meu celular quebrou ' onChange={(e) => mudandoDeProbleminha(e)}></input>
      </div>

    <div style={{margin:"10px"}}>
      <label htmlFor='UltimaSerieId'>Ultima Serie</label>
      <input className='caixa' id='UltimaSerie' type='text' name='UltimaSerie' placeholder='Ex:Station 19' onChange={(e) => mudandoDeUltimaSerie (e)}></input>
    </div>
    </div>


<div>

    <div style={{margin:"10px"}}>
      <label htmlFor='UltimoJogoId'>Ultimo Jogo</label>
      <input className='caixa' id='UltimoJogoId' type='text' name='UltimoJogo'  placeholder='Ex:Minecraft' onChange={(e) => mudandoDeUltimoJogo (e)}></input>
    </div>

     <div style={{margin:"10px"}}>
      <label htmlFor='Musica'>Musica</label>
      <input className='caixa' id='Musica' type='text' name='Musica'  placeholder='Ex:Digno' onChange={(e) => mudandoDeMusica (e)}></input>
    </div>

    <div style={{margin:"10px"}}>
      <label htmlFor='GeneroId'>Genero</label>
      <select className='caixa'id='GeneroId'name='Genero' onChange={(e) => mudandoDeGenero(e)}>
    <option value="">Selecione...</option> <option value="feminino">Feminino</option> <option value="masculino">Masculino</option>
  </select>
    </div>

    <div style={{margin:"10px"}}>
      <label htmlFor='HabilidadeEspecialId'>Habilidade Especial</label>
      <input className='caixa' id='HabilidadeEspecialId' type='text' name='HabilidadeEspecial'  placeholder='Ex:Editar videos,Volei etc;' onChange={(e) => mudandoDeHabilidadeEspecial (e)}></input>
  </div>

</div>

    <div>
      <div style={{margin:"10px"}}>
      <label htmlFor='PoderEspecialId'>Poder Especial</label>
      <input className='caixa' id='PoderEspecialId' type='text' name='PoderEspecial' placeholder='Ex:' onChange={(e) => mudandoDePoderEspecial (e)}></input>
    </div>

    <div style={{margin:"10px"}}> 
      <label htmlFor='TimequeTorceId'>Time que Torce </label>
      <input className='caixa' id='TimequeTorceId' type='text' name='timequeTorce'  placeholder='Ex:Cruzeiro, Flamengo,Etc; 'onChange={(e) => mudandoDetime (e)}></input>
    </div>
    </div>


    </div>
    <button style={{margin:"20px"}}>Enviar</button>
    </div>  
    </>
  )
}

export default App
