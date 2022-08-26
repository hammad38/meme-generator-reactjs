import React, { useEffect, useState } from "react";
import memesData from "../memesData";

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
      .then(res=>res.json())
      .then(memesData => setAllMemeImages(memesData.data.memes))
    },[])


  //changing image on click
  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;

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
