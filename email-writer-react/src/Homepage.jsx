// src/FrontPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Single-file Front Page for Email Reply Generator
 * - Header, Hero (Body), Footer components in one file
 * - Uses TailwindCSS utility classes (optional)
 *
 * Usage: import FrontPage from "./FrontPage"; <FrontPage />
 */

function Header() {
  const navigate = useNavigate(); // ✅ Add this line

  return (
    <header className="w-full bg-white shadow-md py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
          ER
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
          Email Reply Generator
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-slate-600 font-medium">
        <a href="#features" className="hover:text-blue-600 transition">
          Features
        </a>

        {/* Login Button */}
        <button
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition"
          onClick={() => navigate("/app")}
        >
          Use
        </button>
      </nav>
    </header>
  );
}


function HeroSection() {
  const navigate = useNavigate();

  return (
    <main className="flex-grow w-full bg-gradient-to-br from-blue-50 to-white">
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left / Hero Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Generate professional email replies in seconds
          </h2>
          <p className="text-slate-700 text-base md:text-lg max-w-xl">
            Paste an incoming email or describe the context and get a tailored,
            tone-aware reply ready to send. Save time, keep consistency, and
            sound great every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              onClick={() => navigate("/app")}
              className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Get Started
            </button>

            <a
              href="#features"
              className="text-sm text-slate-700 underline underline-offset-2 hover:text-slate-900"
            >
              See features →
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <strong>Pro tip:</strong> Use the keyboard shortcut <code>Ctrl/Cmd + K</code> to focus the input.
          </div>
        </div>

        {/* Right / Mock Input Card */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Paste received email
          </label>

          <textarea
            placeholder="Hi Sampath, Can you share the project update by EOD?"
            className="w-full min-h-[140px] p-3 border rounded-md text-sm text-slate-800 resize-y focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <div className="mt-4 flex items-center justify-between gap-3">
            <select className="px-3 py-2 border rounded-md text-sm">
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="brief">Brief</option>
            </select>

            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-slate-100 rounded-md text-sm hover:bg-slate-200 transition">
                Clear
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
                Generate Reply
              </button>
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            This is a mock UI. Connect the <code>Generate Reply</code> button to your backend AI API.
          </div>
        </div>
      </section>

      {/* Optional Feature Highlights */}
<section
  id="features"
  className="max-w-6xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-6"
>
  <div className="bg-white border rounded-lg p-6 shadow-sm">
    <img
      src="/public/image.png"
      alt="Tone Control"
      className="w-full h-32 object-cover rounded-md mb-3"
    />
    <h3 className="font-semibold text-slate-800 mb-2">Tone Control</h3>
    <p className="text-sm text-slate-600">
      Choose the tone: professional, casual, or concise.
    </p>
  </div>

  <div className="bg-white border rounded-lg p-6 shadow-sm">
    <img
      src="/public/image1.png"
      alt="Templates"
      className="w-full h-32 object-cover rounded-md mb-3"
    />
    <h3 className="font-semibold text-slate-800 mb-2">Templates</h3>
    <p className="text-sm text-slate-600">
      Save and reuse your favorite reply templates.
    </p>
  </div>

  <div className="bg-white border rounded-lg p-6 shadow-sm">
    <img
      src="/public/image.png"
      alt="Integration"
      className="w-full h-32 object-cover rounded-md mb-3"
    />
    <h3 className="font-semibold text-slate-800 mb-2">Integration</h3>
    <p className="text-sm text-slate-600">
      Plug into Gmail, Outlook, or your custom mail server.
    </p>
  </div>
</section>

    </main>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-6 flex justify-center">
      <div className="text-sm text-center">
        © {new Date().getFullYear()} Email Reply Generator. All rights reserved.
      </div>
    </footer>
  );
}

export default function FrontPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
