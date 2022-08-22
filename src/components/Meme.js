import React from "react";

const Meme = () => {
  return (
    <div>
      <main>
        <div action="" className="form">
          <input placeholder="Top Text" type="text" className="form--inputs" />
          <input
            placeholder="Bottom Text"
            type="text"
            className="form--inputs"
          />
          <button className="form--button">Get a new meme image</button>
        </div>
      </main>
    </div>
  );
};

export default Meme;
