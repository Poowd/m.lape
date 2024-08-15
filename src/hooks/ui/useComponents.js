import axios from "axios";
import { useState } from "react";

export default function useComponents() {
  const [components, setComponents] = useState({
    button: {
      textonly: "p-2 rounded",
      withicon: "py-2 px-3 rounded",
    },
  });

  return [components];
}
