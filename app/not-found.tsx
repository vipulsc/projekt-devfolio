import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oops! Lost in Code | Vipul Singh",
  description:
    "Looks like Vipul forgot to push this page to prod. Don't worry, he's probably already fixing it.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 bg-[var(--background)] text-center">
      <h1 className="text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
        This page doesn’t exist… <span className="italic">yet</span>
      </h2>

      <p className="text-base mb-8 w-full sm:w-2/3 md:w-1/2 lg:w-[800px]">
        Either you took a wrong turn on the internet, or Vipul hasn’t built this
        yet.
        <br />
        He probably got distracted by coffee ☕ or another side project 🚀.
      </p>

      <Link
        href="/"
        className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
      >
        Go Home Before He Notices
      </Link>
    </div>
  );
}
