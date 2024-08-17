import { useState } from "react";

export default function useColour() {
  const [colour, setColour] = useState({
    background: {
      primary: "bg-red-700 text-white font-semibold uppercase",
      neutral: "bg-slate-500 text-white",
    },
  });

  return [colour];
}
