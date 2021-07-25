import React from "react";
import Tile from "../components/tile";
import Assets from "../helpers/assets";

function assets() {
  return (
    <div>
      <div className='page'>
        <h1 className='page-title'>Assets</h1>
        {Assets.map((props) => (
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

export default assets;
