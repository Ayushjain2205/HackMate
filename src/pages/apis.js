import React from "react";
import Tile from "../components/tile";
import APIs from "../helpers/apis";

function apis() {
  return (
    <div>
      <div className='page'>
        <h1 className='page-title'>APIs</h1>
        {APIs.map((props) => (
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

export default apis;
