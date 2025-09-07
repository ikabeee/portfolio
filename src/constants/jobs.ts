import Angular from "../components/icons/technologies/Angular.astro";
import AstroIcon from "../components/icons/technologies/AstroIcon.astro";
import Dotnet from "../components/icons/technologies/Dotnet.astro";
import ExpressJs from "../components/icons/technologies/ExpressJs.astro";
import NodeJS from "../components/icons/technologies/NodeJS.astro";
import React from "../components/icons/technologies/React.astro";

export const jobs = [
    {
        company: "Freelance",
        position: "Desarrollador Web",
        duration: "Julio 2025 - Presente",
        location: "Cancún, Quintana Roo, México",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: [
            {
                name: "React",
                icon: React
            },
            {
                name: "Node.js",
                icon: NodeJS,
            },
            {
                name: "ExpressJS",
                icon: ExpressJs
            },
            {
                name: "Astro",
                icon: AstroIcon
            }
        ],
        type: "Tiempo completo"
    },
    {
        company: "Ozelot Technologies",
        position: "Becario Desarrollador Web",
        duration: "Abril 2025 - Julio 2025",
        location: "Remoto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tech: [
            {
                name: "Angular",
                icon: Angular
            },
            {
                name: "Node.js",
                icon: NodeJS,
            },
            {
                name: ".NET",
                icon: Dotnet
            },
        ],
        technologies: "Tiempo completo"
    },
];