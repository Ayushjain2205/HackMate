import React from "react";

function tile({ image, title, details, link }) {
  return (
    <div className='tile'>
      <div className='image-wrapper'>
        <img className='tile-image' src={image} alt='' />
      </div>
      <div className='details'>
        <a href={link} target='_blank' rel='noreferrer'>
          <h2>{title}</h2>
        </a>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default tile;
