import Angular from "../components/icons/technologies/Angular.astro";
import AstroIcon from "../components/icons/technologies/AstroIcon.astro";
import Dotnet from "../components/icons/technologies/Dotnet.astro";
import ExpressJs from "../components/icons/technologies/ExpressJs.astro";
import NodeJS from "../components/icons/technologies/NodeJS.astro";
import React from "../components/icons/technologies/React.astro";
import AngularWhite from "../components/icons/white-tech/AngularWhite.astro";
import AstroWhite from "../components/icons/white-tech/AstroWhite.astro";
import DotnetWhite from "../components/icons/white-tech/DotnetWhite.astro";
import ExpressWhite from "../components/icons/white-tech/ExpressWhite.astro";
import NodeWhite from "../components/icons/white-tech/NodeWhite.astro";
import ReactWhite from "../components/icons/white-tech/ReactWhite.astro";
import type { Job } from "../types/Job";

export const jobs: Job[] = [
    {
        company: "Freelance",
        position: "Desarrollador Web",
        duration: "Julio 2025 - Presente",
        location: "Cancún, Quintana Roo, México",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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