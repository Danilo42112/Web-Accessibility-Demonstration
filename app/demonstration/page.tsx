"use client";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-8 font-sans bg-white">
        <h1 className="text-3xl font-bold text-gray-900">Demonstration</h1>
{/* 1. Div-Button */}
      <button
          onClick={() => alert("Nothing to see here!")}
          className="w-full bg-blue-600 text-white text-center py-3 rounded-md font-semibold cursor-pointer hover:bg-blue-700 select-none"
        >
          Go Back
        </button> <br />

        <br />
        <div
          onClick={() => alert("Nothing to see here!")}
          className="w-full bg-blue-600 text-white text-center py-3 rounded-md font-semibold cursor-pointer hover:bg-blue-700 select-none"
        >
          Go Forward
        </div><br />

        <button
          onClick={() => alert("Nothing to see here!")}
          className="w-full bg-blue-600 text-white text-center py-3 rounded-md font-semibold cursor-pointer hover:bg-blue-700 select-none"
        >
          Menu
        </button>

{/* 2. CONTENT-ACCURATE ALT TEXT */}
      <div className="my-6">
        <img
          src="THB.png"
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="full-name" className="text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              className="w-full p-3 border border-gray-400 rounded bg-white text-gray-900 focus:outline-2 focus:outline-blue-600"
            />
          </div>

          <div className="flex flex-col gap-1">
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

        {/* 3. ACCESSIBLE NAME FOR THE ICON BUTTON (aria-label + aria-hidden) */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-800">Share info:</span>
          <button
            type="button"

            onClick={() => alert("Link copied!")}
            className="p-2 border border-gray-400 rounded hover:bg-gray-100 focus:outline-2 focus:outline-blue-600"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"

            >
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
            </svg>
          </button>
        </div>

    </main>
  );
}