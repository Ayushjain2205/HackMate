import React from "react";
import Tile from "../components/tile";
import Analytics from "../helpers/analytics";

function analytics() {
  return (
    <div>
      <div className='page'>
        <h1 className='page-title'>Analytics</h1>
        {Analytics.map((props) => (
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

export default analytics;
