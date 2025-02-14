import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Happyemojirain from "./HappyEmojiRain";
import Sademojiesrain from "./SadEmojiRain";
import Excitementemojirain from "./Excietment";

import "./valentine.css";

// Images import
import puppyhug1 from "../assets/puppieshug.jpeg";
import puppyhug2 from "../assets/puppieshug2.jpeg";
import dogFreakOut1 from "../assets/dogFreakingOut.jpeg";
import dogFreakOut2 from "../assets/dogFreakingOut2.jpeg";
import justSayYes from "../assets/justSayYes.png";

const Valentine = () => {
  const [yesBtnIndex, setYesBtnIndex] = useState(0);
  const [noBtnIndex, setNoBtnIndex] = useState(0);
  const [clickedYes, setClickedYes] = useState(null);
  const [showHappyEmojirain, setHappyShowEmojirain] = useState(null);
  const [yesBtnSize, setYesBtnSize] = useState(1);

  const [bgImage, setBgImage] = useState(null);

  const yesBtnContentArray = [
    "Yes",
    "Really??",
    "Are you really sure?",
    "Are you For Sure 'For Sure'?",
    "Awwwwww! I LOVE YOU 💓",
  ];
  const noBtnContentArray = [
    "No",
    "Really? 🥺",
    "O.M.G 🥺🥲??",
    "No more NO, Baby Just Say 'YESS'!!!",
  ];

  function changeYesBtnContent() {
    setClickedYes(true);
    setYesBtnIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % yesBtnContentArray.length;

      // Set background based on yesBtnIndex
      if (newIndex === 1 || newIndex === 2) {
        setBgImage(puppyhug1);
      } else if (newIndex === 3) {
        setBgImage(null);
      } else if (newIndex === 4) {
        setBgImage(puppyhug2);
      }

      if (newIndex === 2 || newIndex === yesBtnContentArray.length - 1) {
        setHappyShowEmojirain(true);
      } else {
        setHappyShowEmojirain(null);
      }
      return newIndex;
    });
    setNoBtnIndex(0);
    setYesBtnSize(1);
  }

  const changeNoBtnContent = () => {
    setClickedYes(false);
    setNoBtnIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % noBtnContentArray.length;

      // Set background based on noBtnIndex
      if (newIndex === 1) {
        setBgImage(dogFreakOut1);
      } else if (newIndex === 2) {
        setBgImage(dogFreakOut2);
      } else if (newIndex === 3) {
        setBgImage(justSayYes);
      }

      return newIndex;
    });
    setYesBtnIndex(0);
    setHappyShowEmojirain(false);
    setYesBtnSize((prevSize) => prevSize + 0.3);
  };

  return (
    <main
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
      }}
    >
      <section className="valentine_section">
        <div className="test">
          <div className="question">
            {/* emoji rain control */}
            {showHappyEmojirain === null ? (
              ""
            ) : showHappyEmojirain ? (
              <Happyemojirain />
            ) : (
              <Sademojiesrain />
            )}

            <h2>Will you be my Valentine?</h2>

            <div className="buttons">
              {/* YES BUTTON */}
              {yesBtnIndex === yesBtnContentArray.length - 1 ? (
                <button
                  className="btn yes"
                  onClick={changeYesBtnContent}
                  style={{ transform: `scale(${yesBtnSize})` }}
                >
                  ❤️💓
                </button>
              ) : (
                <button
                  className="btn yes"
                  onClick={changeYesBtnContent}
                  style={{ transform: `scale(${yesBtnSize})` }}
                >
                  Yes
                </button>
              )}

              {/* NO BUTTON */}
              {noBtnIndex === noBtnContentArray.length - 1 ||
              yesBtnIndex === yesBtnContentArray.length - 1 ? (
                <>
                  <button
                    className="btn yes"
                    onClick={changeNoBtnContent}
                    disabled
                  >
                    <FaArrowLeft />
                  </button>
                  <Excitementemojirain />
                </>
              ) : (
                <button className="btn no" onClick={changeNoBtnContent}>
                  No
                </button>
              )}
            </div>

            <h4>
              {clickedYes === null
                ? "👀👀"
                : clickedYes
                ? yesBtnContentArray[yesBtnIndex]
                : noBtnContentArray[noBtnIndex]}
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Valentine;
