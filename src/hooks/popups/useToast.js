import { useState } from "react";

export default function useToast() {
  const [isactive, setIsActive] = useState(false);

  return [isactive];
}
