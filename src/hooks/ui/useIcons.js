import { useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";

export default function useIcons() {
  const [icons, setIcons] = useState({
    alert: <AiFillAlert />,
    details: <TbListDetails />,
  });

  return [icons];
}
