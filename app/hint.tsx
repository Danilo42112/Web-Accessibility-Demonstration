"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-8 font-sans bg-white">
      <div className="flex justify-end mb-4">
        <Link
          href="/solution"
          aria-label="Navigate to the correct version of the page"
          className="rounded-md bg-blue-700 px-1.5 py-0.5 font-semibold text-white hover:bg-blue-800 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
        >
          Ignore me (To the Correct Version)
        </Link>
      </div>

      {/* 1. STRUCTURE: h1 followed by h4 */}
      <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
      <h4 className="text-lg mt-2 text-gray-800">Try it out NOW!</h4>

      {/* 2. MISSING ALTERNATIVE TEXT */}
      {/* The image conveys content (conference stage), but has no alt attribute at all */}
      <div className="my-6">
        <img
          src="THB.png"
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      <form>
        {/* 3. UNLABELED FORM FIELDS */}
        {/* There is no <label>, only visual placeholders */}
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="user-email" className="text-sm font-medium text-gray-900">
              Email Address
            </label>
            <input
              id="user-email"
              type="email"
              className="w-full p-3 border border-gray-400 rounded bg-white text-gray-900 focus:outline-2 focus:outline-blue-600"
            />
          </div>
        </div>

        {/* 4. NON-DESCRIPTIVE LINK */}
        {/* Screen reader reads only "Click here" in isolation – completely without context */}
        <div className="text-sm text-gray-700">
          You can find detailed information{" "}
          <a href="/information.pdf" className="text-blue-500 underline">
            here
          </a>.
        </div>

        {/* 5. EMPTY BUTTON (ICON-ONLY WITHOUT NAME) */}
        {/* Button contains only an SVG icon; screen readers have no 'Accessible Name' */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Share info:</span>
          <button
            onClick={() => alert("Link copied!")}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
            </svg>
          </button>
        </div>

        {/* 6. MISSING KEYBOARD ACCESSIBILITY (FAKE BUTTON) */}
        {/* A <div> responds to click, but can neither be focused with 'Tab' nor triggered with 'Enter'/'Space' */}
        <div
          role="button"
          onClick={() => alert("Registration successful!")}
          className="w-full bg-blue-600 text-white text-center py-3 rounded-md font-semibold cursor-pointer hover:bg-blue-700 select-none"
        >
          Request Free Ticket
        </div>
      </form>
    </main>
  );
}