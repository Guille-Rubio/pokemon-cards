import React from "react";

function Pokemon(props) {

  const { name, order, weight } = props.value

  const image = props.value.sprites.other.dream_world.front_default;

  return <div className="pokemon_card">
    <h1>{name}</h1>
    <p>#{order}</p>
    <img src={image} alt={"pokemon #" + order} />
    <p>weight:{weight}</p>
  </div>;
}

export default Pokemon;
