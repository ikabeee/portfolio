import DockerWhite from "../components/icons/white-tech/DockerWhite.astro";
import ExpressWhite from "../components/icons/white-tech/ExpressWhite.astro";
import NestWhite from "../components/icons/white-tech/NestWhite.astro";
import NodeWhite from "../components/icons/white-tech/NodeWhite.astro";
import PostgresWhite from "../components/icons/white-tech/PostgresWhite.astro";
import ReactWhite from "../components/icons/white-tech/ReactWhite.astro";
import TailwindWhite from "../components/icons/white-tech/TailwindWhite.astro";
import TSWhite from "../components/icons/white-tech/TSWhite.astro";
import type { Project } from "../interfaces/Project";


export const projects: Project[] = [
  {
    title: "Ruta fácil - Proyecto de investigación",
    duration: "Marzo 2024 - Junio 2024",
    img: "/src/assets/ruta-facil.png",
    description: "This is the description for Project One.",
    alt: "Project One",
    codeSource: {
      api: "https://github.com/ikabeee/ruta-facil-api",
      web: "https://github.com/ikabeee/ruta-facil-app-web",
      mobile: "https://github.com/ikabeee/ruta-facil-app"
    },
    technologies: [
      {
        name: "React",
        icon: ReactWhite,
      },
      {
        name: "NodeJS",
        icon: NodeWhite,
      },
      {
        name: "React Native",
        icon: ReactWhite,
      },
      {
        name: "TypeScript",
        icon: TSWhite,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindWhite,
      },
      {
        name: "NestJS",
        icon: NestWhite,
      },
      {
        name: "PostgreSQL",
        icon: PostgresWhite,
      },
      {
        name: "Docker",
        icon: DockerWhite,
      }
    ],
  },
  {
    title: "EYU",
    duration: "Septiembre 2024 - Diciembre 2024",
    img: "/src/assets/landing-eyu.png",
    description: "This is the description for Project One.",
    alt: "Project One",
    codeSource: {
      api: "https://github.com/ikabeee/eyu-backend",
      web: "https://github.com/ikabeee/eyu-frontend",
      mobile: null
    },
    technologies: [
      {
        name: "React",
        icon: ReactWhite,
      },
      {
        name: "NodeJS",
        icon: NodeWhite,
      },
      {
        name: "TypeScript",
        icon: TSWhite,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindWhite,
      },
      {
        name: "Express",
        icon: ExpressWhite,
      },
      {
        name: "PostgreSQL",
        icon: PostgresWhite,
      },
      {
        name: "Docker",
        icon: DockerWhite,
      }
    ],
  },
]