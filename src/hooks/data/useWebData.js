import { useState } from "react";
import reactjs from "../../media/icons/react-js.png";
import csharp from "../../media/icons/c-sharp.png";
import java from "../../media/icons/java.png";
import js from "../../media/icons/js.png";
import mysql from "../../media/icons/mysql.png";

export default function useWebData() {
  const [data, setData] = useState({
    general: {
      webname: "PoodFolio",
      owner: "Mark Lape",
      year: "2024",
    },
    stacks: {
      main: {
        title: "React JS",
        subtitle: "Front-End Framework",
      },
      list: [
        {
          title: "React JS",
          icon: reactjs,
          description: "JavaScript Framework",
          details:
            "wow. amazing! that is so nice, o my gulay, don't touch my kulay.",
        },
        {
          title: "C#",
          icon: csharp,
          description: "Programming Language",
          details:
            "wow. amazing! that is so nice, o my gulay, don't touch my kulay.",
        },
        {
          title: "Java",
          icon: java,
          description: "Programming Language",
          details:
            "wow. amazing! that is so nice, o my gulay, don't touch my kulay.",
        },
        {
          title: "JavaScript",
          icon: js,
          description: "Programming Language",
          details:
            "wow. amazing! that is so nice, o my gulay, don't touch my kulay.",
        },
        {
          title: "MySQL",
          icon: mysql,
          description: "Database",
          details:
            "wow. amazing! that is so nice, o my gulay, don't touch my kulay.",
        },
      ],
    },
  });

  return [data];
}
