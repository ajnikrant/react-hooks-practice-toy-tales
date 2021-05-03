import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, updateToyLikes}) {

const renderToys = toys.map((toy) => <ToyCard updateToyLikes={updateToyLikes} key={toy.id} toyObj={toy} deleteToy={deleteToy}/>)

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
