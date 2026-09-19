import { useEffect, useState } from "react";

function LiveClock() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };

  }, []);

  return (
    <div className="card">

      <h2>Live Clock</h2>

      <div className="clock">
        {date.toLocaleTimeString()}
      </div>

      <p>
        {date.toLocaleDateString()}
      </p>

    </div>
  );
}

export default LiveClock;