import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage"; // your single-file front page
import App from "./App";             // target component

export default function Root(){
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/app" element={<App />} />    {/* note lowercase /app */}
    </Routes>
  );
}
