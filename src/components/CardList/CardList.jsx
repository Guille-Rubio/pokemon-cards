import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from '../Card/Pokemon/Pokemon';



function CardList() {

  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState([])


  useEffect(() => {
    if (input !== "") {
      async function fetchData() {
        try {
          const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
          const result = await request.data
          setPokemon(result)
          setPokemon([...pokemon, result]);
        } catch (err) {
          console.log(err)
          if (err.code === 'ERR_BAD_REQUEST') {
            alert("There is no pokemon saved with that name")
          }
        }
      }
      fetchData()
    }
  }, [input]
  )



  const handleSubmit = async (event) => {
    event.preventDefault();
    setInput(event.target.input.value)
    event.target.input.value = ""
  }





  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="input" placeholder="type in your pokemon" />
      <button type="submit">Search</button>
    </form>
    {pokemon === []
      ? ""
      : pokemon.map(pokemon =>  <Pokemon value={pokemon} /> )

    }

  </div>;

}

export default CardList;
