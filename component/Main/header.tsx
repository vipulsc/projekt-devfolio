"use client";
import Image from "next/image";
import { useTheme } from "../Theme/theme-context";
export default function HeaderMain() {
  const { isLight } = useTheme();
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
