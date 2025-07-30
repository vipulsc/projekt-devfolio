"use client";
import { useState, useEffect } from "react";

export default function LocalTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className=" flex items-center gap-2">
        <div className="relative w-[16px] h-[16px]">
          <div className="absolute inset-0 w-full h-full bg-red-800 border-2 border-red-700 rounded-full  "></div>
          <div className="absolute top-1/2 left-1/2 w-[12px] h-[12px] bg-red-600 border-2 border-red-700 rounded-full animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="hidden md:block">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
        <div className="block md:hidden">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </section>
    </>
  );
}
