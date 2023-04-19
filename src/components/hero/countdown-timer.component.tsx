import { useState, useEffect } from "react";
import CountdownText from "./countdown-text.component";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const eventDate = new Date("2023-05-19T14:00:00Z");

      const totalSeconds = (eventDate - now) / 1000;

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setCountdown({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:mt-10 flex items-center justify-center space-x-5 sm:space-x-10 lg:space-x-20">
      <CountdownText title="días" number={countdown.days} />
      <CountdownText title="minutos" number={countdown.minutes} />
      <CountdownText title="segundos" number={countdown.seconds} />
    </div>
  );
}
