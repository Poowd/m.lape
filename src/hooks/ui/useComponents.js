import { useState } from "react";

export default function useComponents() {
  const [components, setComponents] = useState({
    button: {
      default: "p-2 rounded",
      icon: "py-2 px-3 rounded",
    },
    container: {
      default: "px-40 py-0",
    },
  });

  return [components];
}
