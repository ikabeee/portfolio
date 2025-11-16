import DockerWhite from "../components/icons/white-tech/DockerWhite.astro";
import ExpressWhite from "../components/icons/white-tech/ExpressWhite.astro";
import JSWhite from "../components/icons/white-tech/JSWhite.astro";
import MongoDBWhite from "../components/icons/white-tech/MongoDBWhite.astro";
import NestWhite from "../components/icons/white-tech/NestWhite.astro";
import NodeWhite from "../components/icons/white-tech/NodeWhite.astro";
import PostgresWhite from "../components/icons/white-tech/PostgresWhite.astro";
import ReactWhite from "../components/icons/white-tech/ReactWhite.astro";
import TailwindWhite from "../components/icons/white-tech/TailwindWhite.astro";
import TSWhite from "../components/icons/white-tech/TSWhite.astro";
import type { Project } from "../interfaces/Project";


export const projects: Project[] = [
  {
    title: "Centlogic Restaurantes",
    duration: "Agosto 2025 - Noviembre 2025",
    img: "/centlogic-restaurantes/cover.png",
    objects: [
      "/centlogic-restaurantes/cover.png",
      "/centlogic-restaurantes/take-order.png",
      "/centlogic-restaurantes/order-history.png",
      "/centlogic-restaurantes/cashier.png",
      "/centlogic-restaurantes/products.png",
      "/centlogic-restaurantes/tickets.png",
      "/centlogic-restaurantes/active-order.png",
    ],
    description: "Sistema POS diseñado para restaurantes que buscan digitalizar procesos operativos como pedidos, inventario, menú, empleados y reportes. Está desarrollado con Node.js, Express y MongoDB en el backend, bajo una arquitectura en capas, y con React y Vite en el frontend. Incluye comunicación en tiempo real mediante WebSockets, soporte para impresión ESC/POS y generación de tickets PDF. El proyecto está desplegado en Render y orientado a microempresas que necesitan una herramienta práctica, accesible y adaptable a su flujo de trabajo diario",
    alt: "Logo de Centloginc Restaurantes",
    codeSource: {
      api: "No disponible",
      web: "No disponible"
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
        name: "Javascript",
        icon: JSWhite,
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
        name: "MongoDB",
        icon: MongoDBWhite,
      },
      {
        name: "Docker",
        icon: DockerWhite,
      }
    ],
  },
  {
    title: "Ruta fácil - Proyecto de investigación",
    duration: "Marzo 2024 - Junio 2024",
    img: "/ruta-facil/ruta-facil.png",
    objects: [
      "/ruta-facil/ruta-facil.png",
    ],
    description: "Ruta fácil es una plataforma diseñada para facilitar la movilidad de personas que se encuentran en el pueblo mágico de Huauchinango, Puebla. La plataforma ofrece una aplicación móvil para los usuarios y un dashboard web para los administradores, permitiendo una gestión eficiente de las rutas y servicios de transporte en la zona.",
    alt: "Dashboard de Ruta fácil",
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
    img: "/eyu/landing-eyu.png",
    objects: [
      "/eyu/landing-eyu.png",
    ],
    description: "Explore Your Universe (EYU) es una plataforma web que permite a los usuarios explorar diferentes universidades, programas académicos, y actividades extracurriculares. La plataforma está diseñada para ayudar a los estudiantes a tomar decisiones informadas sobre su educación superior, proporcionando información detallada y recursos útiles.",
    alt: "Catálogo de EYU",
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