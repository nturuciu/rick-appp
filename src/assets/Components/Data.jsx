import { useState, useEffect } from "react";

const Data = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log(data.results);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) => {
    if (filter === "") {
      return true; 
    }
    return character.gender === filter;
    
  });

   const searchedCharacters = filteredCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="bg-slate-950 text-blue-100">
    <div className=" p-8 flex justify-center">
      <div>
        <label>Filter by Gender:</label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div>
        <label >Search by Name: </label>
        <input           type="text"
          placeholder="Search..." className=" text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
     </div>
<div className="grid grid-cols-3 gap-4 pr-6 inline-block">
      {searchedCharacters.map((character) => {
        return (
            
          <div key={character.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={character.image} alt={character.name} className="w-full" />
           <div className="bg-blue-950"> 
            <p>{character.name}  </p>
            <ul className= "" >
            <li>Gender: {character.gender}</li>
            <li>Species: {character.species}</li>
            <p>Status: {character.status}</p>
            </ul>
            </div>
            <p></p>
          </div> 
         
        
          
         
        );
      })}
       </div>
    </div>
  );
};

export default Data;
