import { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";
import { fetchAndSetParagraph } from "../helper/quoteHandler";
import { useSelector, useDispatch } from "react-redux";
import {
  updateWPM,
  resetStatsAndUpdateScore,
  updateErrors,
} from "../Redux/statSlice";
import { stopTimer, startTimer } from "../helper/timerHandler";

const TextField = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.timer);
  const { scoreData, errorCount, wpm } = useSelector((state) => state.stats);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (userInput) {
      check();
    }
  }, [userInput]);

  useEffect(() => {
    let timeTaken = 60 - count;
    if (!timeTaken) return;
    let wpm = calculateWPM(userInput.length, timeTaken);
    dispatch(updateWPM(wpm));
  }, [count]);

  function check() {
    startTimer(dispatch);
    let errors = 0;
    let letters = document.querySelectorAll("span.letter");

    if (userInput.length === letters.length) {
      finishAttempt();
      setUserInput("");
      return;
    }

    // Highlighting Correct and Incorrect Letters
    letters.forEach((letter, index) => {
      if (!userInput[index]) {
        letter.classList.remove("correct");
        letter.classList.remove("incorrect");
      } else if (letter.innerHTML === userInput[index]) {
        letter.classList.remove("incorrect");
        letter.classList.add("correct");
      } else if (letter.innerHTML !== userInput[index]) {
        letter.classList.add("incorrect");
        letter.classList.remove("correct");
        errors += 1;
      }
    });

    dispatch(updateErrors(errors));
  }

  function finishAttempt() {
    stopTimer(dispatch);
    let timeCount = 60 - count;
    let spans = document.querySelectorAll("span.letter");

    //Calculate Score
    let correctWords = spans.length - errorCount;
    let score = ((correctWords / spans.length) * 100).toFixed(2);

    //Resetting To default and Setting Score
    fetchAndSetParagraph();
    dispatch(
      resetStatsAndUpdateScore({
        score,
        errorCount,
        timeCount,
        wpm,
      })
    );
  }

  return (
    <>
      <div className="container">
        <textarea
          id="userInput"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          placeholder="Start Typing Here..."
        ></textarea>
        <ScoreBoard scoreData={scoreData} />
      </div>
    </>
  );
};

function calculateWPM(inputLength, timeTaken) {
  const min = timeTaken / 60;
  let wpm = inputLength / 5;
  return Math.round(wpm / min);
}

export default TextField;
