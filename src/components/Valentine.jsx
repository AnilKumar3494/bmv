import React, { useState } from "react";

import { FaArrowLeft } from "react-icons/fa";
import Happyemojirain from "./HappyEmojiRain";
import Sademojiesrain from "./SadEmojiRain";
import Excitementemojirain from "./Excietment";

import "./valentine.css";

const Valentine = () => {
  const [yesBtnIndex, setYesBtnIndex] = useState(0);
  const [noBtnIndex, setNoBtnIndex] = useState(0);
  const [clickedYes, setClickedYes] = useState(null);
  //emoji rain
  const [showHappyEmojirain, setHappyShowEmojirain] = useState(null);

  const yesBtnContentArray = [
    "Yes",
    "Really??",
    "Are you really sure?",
    "Are you really really sure?",
    "Awwww! I LOVE YOU 💓",
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
      if (newIndex === 2 || newIndex === yesBtnContentArray.length - 1) {
        setHappyShowEmojirain(true);
      } else {
        setHappyShowEmojirain(null);
      }

      return newIndex;
    });
    setNoBtnIndex(0);
  }

  const changeNoBtnContent = () => {
    setClickedYes(false);
    setNoBtnIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % noBtnContentArray.length;
      newIndex === noBtnContentArray.length - 1 && setHappyShowEmojirain(null);
      return newIndex;
    });
    setYesBtnIndex(0);
    setHappyShowEmojirain(false);
  };

  return (
    <main>
      <section className="valentine_section">
        <div className="test">
          <div className="question ">
            {/* emoji rain control - frontend */}
            {showHappyEmojirain === null ? (
              ""
            ) : showHappyEmojirain ? (
              <Happyemojirain />
            ) : (
              <Sademojiesrain />
            )}

            <h2>Will you be my Valentine?</h2>

            {/* YES BUTTON */}
            <div className="buttons">
              {yesBtnIndex === yesBtnContentArray.length - 1 ? (
                <button className="btn yes" onClick={changeYesBtnContent}>
                  ❤️💓
                </button>
              ) : (
                <button className="btn yes" onClick={changeYesBtnContent}>
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
