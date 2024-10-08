import imageRickMorty from './img/rick-morty.png'
import './App.css'
import { useState } from 'react'
import Characters from './components/Characters';


function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
  // console.log("Clicking");
  const api = await fetch('https://rickandmortyapi.com/api/character');

  const characterApi = await api.json();

  console.log(characterApi)
  setCharacters(characterApi.results)

}
// console.log(characters);

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1 className='title'>Rick & Morty</h1>
          {characters ? (
            <Characters characters={characters} setCharacters={setCharacters}/>
          ) : (
            <>
              <img src={imageRickMorty} alt='Rick & Morty' className='img-home'/>
              <div>
                <button className='btn-search' onClick={ reqApi }>Buscar Personajes</button>
              </div>
            </>
          )}
        </header>
      </div>
    </>
  )
}

export default App
