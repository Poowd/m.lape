import { useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { VscLiveShare } from "react-icons/vsc";

export default function useIcons() {
  const [icons, setIcons] = useState({
    alert: <AiFillAlert />,
    details: <TbListDetails />,
    liveview: <VscLiveShare />,
  });

  return [icons];
}
