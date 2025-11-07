import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const[Title                                                                                                                                                                                                                                                                                  
    ,setTitle] = useState('')
  const mudandoDeTitulo =(e) =>{
    setTitle(e.title.value)
  }
  const[DataNas,setDataNas] = useState('')
  const mudandoDeData =(e) =>{
    setDataNas(e.dataNas.value)
  }
  const[Telefone,setTelefone] = useState('')
  const mudandoDeTelefone =(e) =>{
    setTelefone(e.telefone.value)
  }

  const[Instagram,setInstagram] = useState('')
  const mudandoDeInstagram =(e) =>{
    setInstagram(e.instagram.value)
  }

  const[GitHub,setGitHub] = useState('')
  const mudandoDeGitHub =(e) =>{
    setGitHub(e.GitHub.value)
  }
  const[Pensamento,setPensamento] = useState('')
  const mudandoDePensamento =(e) =>{
    setPensamento(e.pensamento.value)
  }

  const[Probleminha,setProbleminha] = useState('')
  const mudandoDeProbleminha =(e) =>{
    setProbleminha(e.probleminha.value)
  } 
  const[UtimaSerie,setUtimaSerie] = useState('')
  const mudandoDeUtimaSerie =(e) =>{
    setUtimaSerie(e.ultimaserie.value)
  }

  const[UltimoJogo,setUltimoJogo] = useState('')
  const mudandoDeUltimoJogo =(e) =>{
    setUltimoJogo(e.ultimoJogo.value)
  }

   const[Musica,setMusica] = useState('')
  const mudandoDeMusica =(e) =>{
    setMusica(e.musica.value)
  }

  const[Genero,setGenero] = useState('')
  const mudandoDeGenero =(e) =>{
    setGenero(e.genero.value)
  }
  const[HabilidadeEspecial,setHabilidadeEspecial] = useState('')
  const mudandoDeHabilidadeEspecial =(e) =>{
    setHabilidadeEspecial(e.HabilidadeEspecial.value)
  }

  const[PoderEspecial,setPoderEspecial] = useState('')
  const mudandoDePoderEspecial =(e) =>{
    setPoderEspecial(e.poderEspecial.value)
  }

  const[TimeQueTorce,setTimequeTorce] = useState('')
  const mudandoDeTimeQueTorce =(e) =>{
    setTimequeTorce(e.time.value)
}
const[Email,setEmail] = useState('')
  const mudandoDeEmail =(e) =>{
    setEmail(e.email.value)
  }
  const[Senha,setSenha] = useState('')
  const mudandoDeSenha =(e) =>{
    setSenha(e.senha.value)
  }
useEffect(() => {
 fetch(`https://api.alanleiser.com/`)
 .then((response) => response.json())
 .then(json => console.log(json));
}, []);

const enviarForms=(e) =>{
  e.preventDefault();
  console.log(`email: ${Email}, senha: ${Senha}`);

  <input
   id='emailId'
   type='email'
   name='Email'
  value={Email}
  onChange={(e) => mudandoDeEmail(e)}
  />}

  return (
    <>

 <div>
    <div style={{margin:"10px"}}>
      <label htmlFor='emailId'>E-mail </label>
      <input className='caixa' id='emailId' type='email' name='Email' placeholder="Digite seu e-mail" onChange={(e) => mudandoDeEmail(e)}></input>
  </div>
  <div style={{margin:"10px"}}>
      <label htmlFor='senhaId'>Senha </label>
      <input className='caixa' id='senhaId' type='password' name='Senha' placeholder="Senha" onChange={(e) => mudandoDeSenha(e)}></input>
  </div>
</div>
    
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
      <input className='caixa' id='TimequeTorceId' type='text' name='timequeTorce'  placeholder='Ex:Cruzeiro, Flamengo,Etc; 'onChange={(e) => mudandoDeTimeQueTorce (e)}></input>
    </div>
    </div>


    </div>
    <button style={{margin:"20px"}}>Enviar</button>
    </div>  
    </>
  )
}
export default App
