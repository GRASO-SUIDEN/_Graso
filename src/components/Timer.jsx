import { useEffect, useRef, useState } from "react";
import { FaStopwatch } from "react-icons/fa6";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date(" November 25, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <div className="w-full flex justify-around items-center p-1">
      <div>
        <h1 className=" text-white font-semibold ">Ends In</h1>
      </div>
      <div className="flex justify-center items-center space-x-2 text-white font-semibold">
        <FaStopwatch />
        <span>
          {timerDays < 10 ? "0" : ""}
          {timerDays}D
        </span>
        <span>
          {timerHours < 10 ? "0" : ""}
          {timerHours}H
        </span>
        <span>
          {timerMinutes < 10 ? "0" : ""}
          {timerMinutes}M
        </span>
        <span>
          {timerSeconds < 10 ? "0" : ""}
          {timerSeconds}S
        </span>
      </div>
    </div>
  );
};

export default Timer;
