import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy validation — replace with API call
    if (username.trim() !== "" && password.trim() !== "") {
      onLogin?.(username);
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
        
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Email Reply Generator
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Username */}
          <div>
            <label className="text-white text-sm">Username</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
