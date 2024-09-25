import { useEffect, useRef, useState } from "react";
import { CiStopwatch } from "react-icons/ci";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerseconds, setTimerSeconds] = useState("00");

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
    <div>
      <div className=" flex  justify-around  bg-teal-500 rounded-b-2xl shadow-lg shadow-teal-950/50 ">
        <h1 className=" text-white font-semibold ">Ends In</h1>
        <section className=" pt-1 pl-10 ">
          <i className=" text-white font-semibold ">
            {" "}
            <CiStopwatch />
          </i>
        </section>
        <section>
          <p className=" text-white font-semibold ">
            {timerDays}
            <small className=" text-white ">D</small>{" "}
          </p>
          {/* <p><small>Days</small></p> */}
        </section>
        {/* <span>:</span> */}
        <section>
          <p className=" text-white font-semibold ">
            {timerHours}
            <small>H</small>{" "}
          </p>
          {/* <p><small>hours</small></p> */}
        </section>
        {/* <span>:</span> */}
        <section>
          <p className=" text-white font-semibold ">
            {timerMinutes}
            <small>M</small>{" "}
          </p>
          {/* <p><small>minutes</small></p> */}
        </section>
        <section>
          <p className=" text-white font-semibold ">
            {timerseconds} <small>S</small>{" "}
          </p>
          {/* <p><small>seconds</small></p> */}
        </section>
      </div>
    </div>
  );
};

export default Timer;
