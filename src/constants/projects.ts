import ReactWhite from "../components/icons/white-tech/ReactWhite.astro";
import type { Project } from "../interfaces/Project";


export const projects: Project[] = [
  {
    title: "Ruta fácil - Proyecto de investigación",
    duration: "Marzo 2024 - Junio 2024",
    img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    description: "This is the description for Project One.",
    alt: "Project One",
    codeSource: {
      api: "https://github.com/username/repo-one",
      web: "https://project-one.com",
      mobile: null
    },
    technologies: [
      {
        name: "React",
        icon: ReactWhite,
      },
      {
        name: "TypeScript",
        icon: ReactWhite,
      },
      {
        name: "Tailwind CSS",
        icon: ReactWhite,
      },
      {
        name: "NestJS",
        icon: ReactWhite,
      },
      {
        name: "PostgreSQL",
        icon: ReactWhite,
      },
      {
        name: "Docker",
        icon: ReactWhite,
      }
    ],
  },
  {
    title: "EYU",
    duration: "Septiembre 2024 - Diciembre 2024",
    img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    description: "This is the description for Project One.",
    alt: "Project One",
    codeSource: {
      api: "https://github.com/username/repo-one",
      web: "https://project-one.com",
      mobile: "https://project-one-mobile.com"
    },
    technologies: [
      {
        name: "React",
        icon: ReactWhite,
      },
      {
        name: "React Native",
        icon: ReactWhite,
      },
      {
        name: "TypeScript",
        icon: ReactWhite,
      },
      {
        name: "Tailwind CSS",
        icon: ReactWhite,
      },
      {
        name: "Express",
        icon: ReactWhite,
      },
      {
        name: "PostgreSQL",
        icon: ReactWhite,
      },
      {
        name: "Docker",
        icon: ReactWhite,
      }
    ],
  },
]