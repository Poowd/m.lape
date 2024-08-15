import { useState } from "react";
import { AiFillAlert } from "react-icons/ai";

export default function useIcons() {
  const [icons, setIcons] = useState({
    alert: <AiFillAlert />,
  });

  return [icons];
}
