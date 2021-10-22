import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { stopTimer } from "../helper/timerHandler";

const Timer = () => {
  const timer = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    const timerElement = document.getElementById("timer");
    if (timer.count === 0) {
      stopTimer(dispatch);
      alert("You are too slow😴🐢! Try Again!");
      window.location.reload();
    }
    if (timer.count < 15) {
      timerElement.classList.add("blink");
    }
  }, [timer.count]);

  return <div id="timer">{timer.count} (Sec)⌚</div>;
};

export default Timer;
