import React, { useState } from "react";
import memesData from "../memesData";

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);
console.log(setAllMemeImages)
  //changing image on click
  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  //showing text on the image
  const handleChange = (event) => {

    const { name, value } = event.target;
    
    setMeme((prevMeme)=>({
      ...prevMeme,
      [name] : value
    }))
  };

  return (
    <main>
      <div action="" className="form">
        <input
          placeholder="Top Text"
          type="text"
          className="form--inputs"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          placeholder="Bottom Text"
          type="text"
          className="form--inputs"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme--image" />
        <h1 className="meme--text top">{meme.topText}</h1>
        <h1 className="meme--text bottom">{meme.bottomText}</h1>
      </div>
    </main>
  );
};

export default Meme;
