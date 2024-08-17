import { useState } from "react";
import reactjs from "../../media/icons/react-js.png";
import csharp from "../../media/icons/c-sharp.png";
import java from "../../media/icons/java.png";
import js from "../../media/icons/js.png";
import mysql from "../../media/icons/mysql.png";
import github from "../../media/icons/github.png";
import warning from "../../media/utility_icons/warning.png";
import cyanrealms from "../../media/icons/experience/cyanrealms.png";
import classkode from "../../media/projects/classkode.jfif";
import { SiGmail } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiGithub } from "react-icons/si";

export default function useWebData() {
  const [data, setData] = useState({
    utility_icons: {
      warning: warning,
    },
    general: {
      webname: "PoodFolio",
      owner: "Mark Lape",
      year: "2024",
      featuredlinks: [
        {
          title: "Facebook",
          type: "link",
          icon: <SiFacebook />,
          link: "https://www.facebook.com/RinkashimeTakanoku",
        },
        {
          title: "Github",
          type: "link",
          icon: <SiGithub />,
          link: "https://github.com/Poowd",
        },
        {
          title: "G-Mail",
          type: "email",
          icon: <SiGmail />,
          link: "lapemark11@gmail.com",
        },
      ],
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
        {
          title: "Github",
          icon: github,
          description: "Tools",
          details:
            "wow. amazing! that is so nice, o my gulay, don't touch my kulay.",
        },
      ],
    },
    experience: {
      list: [
        {
          company: "Cyan Realms",
          icon: cyanrealms,
          position: "Server Manager",
          details:
            "I am a manager at a game-based community, while being a developer for a minecraft server.",
        },
      ],
    },
    project: {
      list: [
        {
          project: "Class Kode",
          title: "Automated Class Scheduling System",
          details:
            "It is an automation of scheduling system for sti classes with the help of genetic algorithm along side forward-chain, etc.",
          techs: ["React JS", "Bootstrap 5.3"],
          image: classkode,
        },
      ],
    },
  });

  return [data];
}
