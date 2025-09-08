import AngularWhite from "../components/icons/white-tech/AngularWhite.astro";
import AstroWhite from "../components/icons/white-tech/AstroWhite.astro";
import DotnetWhite from "../components/icons/white-tech/DotnetWhite.astro";
import ExpressWhite from "../components/icons/white-tech/ExpressWhite.astro";
import NodeWhite from "../components/icons/white-tech/NodeWhite.astro";
import ReactWhite from "../components/icons/white-tech/ReactWhite.astro";
import type { Job } from "../interfaces/Job";

export const jobs: Job[] = [
    {
        company: "Freelance",
        position: "Desarrollador Web",
        duration: "Julio 2025 - Presente",
        location: "Cancún, Quintana Roo, México",
        description: "Actualmente trabajo como freelancer desarrollando un SaaS para la gestión de restaurantes en Mérida utilizando React, Express y Docker. Además, diseño y construyo sitios web con Astro para la creación de contenido estático, ofreciendo soluciones prácticas y adaptadas a las necesidades de cada cliente.",
        technologies: [
            {
                name: "React",
                icon: ReactWhite
            },
            {
                name: "Node.js",
                icon: NodeWhite
            },
            {
                name: "ExpressJS",
                icon: ExpressWhite
            },
            {
                name: "Astro",
                icon: AstroWhite
            }
        ],
        type: "Tiempo completo"
    },
    {
        company: "Ozelot Technologies",
        position: "Becario Desarrollador Web",
        duration: "Abril 2025 - Julio 2025",
        location: "Remoto",
        description: "Me enfoqué en optimizar el sistema de reportes del COBAY, mejorando su funcionalidad, y experiencia de usuario. Entre mis aportes destacan la corrección de errores críticos, la incorporación de exportaciones a formatos clave y la optimización de componentes reutilizables en Angular.",
        technologies: [
            {
                name: "Angular",
                icon: AngularWhite
            },
            {
                name: "Node.js",
                icon: NodeWhite,
            },
            {
                name: ".NET",
                icon: DotnetWhite
            },
        ],
        type: "Tiempo completo"
    },
];