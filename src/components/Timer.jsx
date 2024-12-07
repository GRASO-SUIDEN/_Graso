import { useEffect, useRef, useState } from "react";
import { FaStopwatch } from "react-icons/fa6";

const Timer = ({ dateTimestamp }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const intervalRef = useRef(null);

  const startTimer = () => {
    const countdownDate = new Date(dateTimestamp * 1000).getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // Stop the timer when the countdown is complete
        clearInterval(intervalRef.current);
        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else {
        // Update the timer
        setTimerDays(days < 10 ? `0${days}` : days);
        setTimerHours(hours < 10 ? `0${hours}` : hours);
        setTimerMinutes(minutes < 10 ? `0${minutes}` : minutes);
        setTimerSeconds(seconds < 10 ? `0${seconds}` : seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    if (dateTimestamp) {
      startTimer();
    }
    return () => clearInterval(intervalRef.current); // Cleanup the interval on unmount
  }, [dateTimestamp]);

  return (
    <div className="w-full flex justify-around items-center p-1">
      <div>
        <h1 className=" text-white font-semibold ">Ends In</h1>
      </div>
      <div className="flex justify-center items-center space-x-2 text-white font-semibold">
        <FaStopwatch />
        <span>{timerDays}D</span>
        <span>{timerHours}H</span>
        <span>{timerMinutes}M</span>
        <span>{timerSeconds}S</span>
      </div>
    </div>
  );
};

export default Timer;
