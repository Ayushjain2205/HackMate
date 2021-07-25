import React from "react";
import Tile from "../components/tile";
import Tutorials from "../helpers/tutorials";

function tutorials() {
  return (
    <div>
      <div className='page'>
        <h1 className='page-title'>Tutorials</h1>
        {Tutorials.map((props) => (
          <Tile
            image={props.image}
            title={props.title}
            details={props.details}
            link={props.link}
          />
        ))}
      </div>
    </div>
  );
}

export default tutorials;
