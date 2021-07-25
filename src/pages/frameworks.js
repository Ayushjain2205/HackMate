import React from "react";
import Tile from "../components/tile";
import Frameworks from "../helpers/frameworks";

function frameworks() {
  return (
    <div>
      <div className='page'>
        <h1 className='page-title'>Frameworks</h1>
        {Frameworks.map((props) => (
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

export default frameworks;
