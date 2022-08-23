import React, { useState } from "react";
import memesData from "../memesData";

const Meme = () => { 
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage= () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };

  return (
      <main>
        <div action="" className="form">
          <input placeholder="Top Text" type="text" className="form--inputs" />
          <input
            placeholder="Bottom Text"
            type="text"
            className="form--inputs"
          />
          <button className="form--button" onClick={getMemeImage}>
            Get a new meme image
          </button>
        </div>
        <img src={memeImage} alt="" className="meme--image"/>
      </main>
  );
};

export default Meme;
