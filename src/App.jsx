import { useState } from 'react'
import { Card } from './Components/Card/Card'
import './App.css'
const URL = 'https://rickandmortyapi.com/api/character'


function App() {
  const [characters, setCharacters] = useState([]);

  const handleGetApi = async () => {
    try {
      const newCharacters = [];
      const response = await fetch(URL);

      const data = await response.json();

      data.results.slice(0, 20).forEach((character) => {
        newCharacters.push({
          name: character.name,
          gender: character.gender,
          image: character.image,
        });
      });
      setCharacters(newCharacters);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className='cards-container'>
        {characters.map((character, index) => (
          <Card
            key={index}
            nameCharacter={character.name}
            imgCharacter={character.image}
            genderCharacter={character.gender}
          />
        ))}
      </div>
      <button className='generate' onClick={handleGetApi}>
        Generar Personajes
      </button>
    </>
  );
}

export default App;
