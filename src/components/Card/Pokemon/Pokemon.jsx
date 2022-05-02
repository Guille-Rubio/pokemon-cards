import React from "react";

function Pokemon(props) {

  const { name, order, weight } = props.value

  const image = props.value.sprites.other.dream_world.front_default;

  return <div>
    <p>{name}</p>
    <p>#{order}</p>
    <img src={image} alt={"pokemon #" + order} />
    <p>weight:{weight}</p>
    <p></p>
  </div>;
}

export default Pokemon;
