import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={character.image} alt={character.name} className="rounded-full h-40 w-40" />
      <p className="font-semibold">{character.name}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      {/* Add more character details here */}
    </div>
  );
}

export default CharacterDetails;
