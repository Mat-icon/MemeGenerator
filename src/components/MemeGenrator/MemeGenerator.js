import React, { useState } from "react";

function MemeGenerator({ meme }) {
  const [memeImage, setMemeImage] = useState("");
  const [topText, setTopText] = useState({
    topText: "",
  });
  const [botText, setBotText] = useState({
    bottomText: "",
  });

  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTopText((...prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  }
  function handleChanger(event) {
    const { name, value } = event.target;
    setBotText((...prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  }
  function getMemeImage() {
    const memeArray = meme;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    setMemeImage(memeArray[randomNumber].src);
  }

  return (
    <div>
      <div className={darkMode ? "meme-body-dark" : "meme-body"}>
        <div className="meme-nav">
          <div className="meme-flex">
            <h1>MemeGenerator</h1>
            <button onClick={handleClick} className="mode">
              Mode
            </button>
          </div>
        </div>
        <div className="meme-grid">
          <div className="meme-input">
            <input
              placeholder="Top Text"
              className="top"
              name="topText"
              onChange={handleChange}
              value={topText.topText}
            />
            <input
              placeholder="Bottom Text"
              className="top"
              name="bottomText"
              onChange={handleChanger}
              value={botText.bottomText}
            />
          </div>
          <button onClick={getMemeImage} className="meme-btn">
            Get A New Meme Image
          </button>
          <div className="image">
            <img className="image-meme" src={memeImage} alt="" />
            <div className="image-text">
              <h2>{topText.topText}</h2>
              <h4>{botText.bottomText}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemeGenerator;
