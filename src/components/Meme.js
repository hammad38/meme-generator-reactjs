import React, { useState } from "react";
import memesData from "../memesData";

const Meme = () => {
  // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1bij.jpg");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)



  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url 
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  };

  return (
    <main>
      <div action="" className="form">
        <input placeholder="Top Text" type="text" className="form--inputs" />
        <input placeholder="Bottom Text" type="text" className="form--inputs" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img src={meme.randomImage} alt="" className="meme--image" />
    </main>
  );
};

export default Meme;
