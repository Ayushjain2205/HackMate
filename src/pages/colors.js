import React from "react";
import Tile from "../components/tile";
import Colors from "../helpers/colors";

function colors() {
  return (
    <div>
      <div className='page'>
        <h1 className='page-title'>Color Tools</h1>
        {Colors.map((props) => (
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

export default colors;
