import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Vipul Singh",
  description:
    "The page you are looking for could not be found. Please check the URL or return to the homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you are looking for could not be found. Please check the
            URL or return to the homepage.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Or try these popular pages:</p>
            <div className="mt-2 space-x-4">
              <Link
                href="/#about"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
