"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function HeaderMain() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, []);
  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-row items-center gap-8">
          {isLight ? (
            <Image src={"/pfp.jpeg"} alt="vipul" width={130} height={130} />
          ) : (
            <Image src={"/pfp2.jpg"} alt="vipul" width={130} height={130} />
          )}
          <h1>Vipul Singh</h1>
        </div>
      </div>
    </>
  );
}
