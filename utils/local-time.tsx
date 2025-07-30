// "use client";
// import { useState, useEffect } from "react";

// export default function LocalTime() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <section className=" flex items-center gap-2">
//         <div className="relative w-[16px] h-[16px]">
//           <div className="absolute inset-0 w-full h-full bg-red-800 border-2 border-red-700 rounded-full  "></div>
//           <div className="absolute top-1/2 left-1/2 w-[12px] h-[12px] bg-red-600 border-2 border-red-700 rounded-full animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
//         </div>

//         <div className="hidden md:block">
//           {time.toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//             second: "2-digit",
//           })}
//         </div>
//         <div className="block md:hidden">
//           {time.toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </div>
//       </section>
//     </>
//   );
// }
// {"Above code is hydration error"}
"use client";
import { useState, useEffect, useCallback, useRef } from "react";

interface LocalTimeProps {
  className?: string;
}

export default function LocalTime({ className = "" }: LocalTimeProps) {
  const [time, setTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const syncTimerRef = useRef<NodeJS.Timeout | null>(null);

  const updateTime = useCallback(() => {
    setTime(new Date());
  }, []);

  useEffect(() => {
    setMounted(true);

    // Set initial time immediately
    updateTime();

    // Calculate milliseconds until next second to sync perfectly
    const now = new Date();
    const msUntilNextSecond = 1000 - now.getMilliseconds();

    // Start first timer to sync with the next second
    syncTimerRef.current = setTimeout(() => {
      updateTime();
      // Then start regular interval
      intervalRef.current = setInterval(updateTime, 1000);
    }, msUntilNextSecond);

    // Cleanup function
    return () => {
      if (syncTimerRef.current) {
        clearTimeout(syncTimerRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [updateTime]);

  // Early return for loading state
  if (!mounted || !time) {
    return (
      <section className={`flex items-center gap-2 ${className}`}>
        <div className="relative w-4 h-4">
          <div className="absolute inset-0 w-full h-full bg-red-800 border-2 border-red-700 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-600 border-2 border-red-700 rounded-full animate-pulse -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="hidden md:block">--:--:--</div>
        <div className="block md:hidden">--:--</div>
      </section>
    );
  }

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const timeOptionsWithSeconds: Intl.DateTimeFormatOptions = {
    ...timeOptions,
    second: "2-digit",
  };

  return (
    <section className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-4 h-4">
        <div className="absolute inset-0 w-full h-full bg-red-800 border-2 border-red-700 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-600 border-2 border-red-700 rounded-full animate-pulse -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="hidden md:block">
        {time.toLocaleTimeString([], timeOptionsWithSeconds)}
      </div>
      <div className="block md:hidden">
        {time.toLocaleTimeString([], timeOptions)}
      </div>
    </section>
  );
}
