import BackendDev from "../components/icons/general/BackendDev.astro";
import BinaryFile from "../components/icons/general/BinaryFile.astro";
import Console from "../components/icons/general/Console.astro";
import Tools from "../components/icons/general/Tools.astro";
import Angular from "../components/icons/technologies/Angular.astro";
import AstroIcon from "../components/icons/technologies/AstroIcon.astro";
import Cs from "../components/icons/technologies/Cs.astro";
import Css from "../components/icons/technologies/Css.astro";
import Docker from "../components/icons/technologies/Docker.astro";
import Dotnet from "../components/icons/technologies/Dotnet.astro";
import ExpressJs from "../components/icons/technologies/ExpressJs.astro";
import Git from "../components/icons/technologies/Git.astro";
import GithubCopilot from "../components/icons/technologies/GithubCopilot.astro";
import HTML from "../components/icons/technologies/HTML.astro";
import Java from "../components/icons/technologies/Java.astro";
import Javascript from "../components/icons/technologies/Javascript.astro";
import Linux from "../components/icons/technologies/Linux.astro";
import MySQL from "../components/icons/technologies/MySQL.astro";
import NestJS from "../components/icons/technologies/NestJS.astro";
import NodeJS from "../components/icons/technologies/NodeJS.astro";
import PostgreSQL from "../components/icons/technologies/PostgreSQL.astro";
import Postman from "../components/icons/technologies/Postman.astro";
import React from "../components/icons/technologies/React.astro";
import SpringBoot from "../components/icons/technologies/SpringBoot.astro";
import SQLServer from "../components/icons/technologies/SQLServer.astro";
import Tailwind from "../components/icons/technologies/Tailwind.astro";
import Typescript from "../components/icons/technologies/Typescript.astro";
import type { SkillGroup } from "../interfaces/SkillGroup";

export const skillGroups: SkillGroup[] = [
    {
        icon: BinaryFile,
        name: "Lenguajes",
        technologies: [
            {
                name: "CSS",
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                icon: Css
            },
            {
                name: "HTML",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                icon: HTML
            },
            {
                name: "JavaScript",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                icon: Javascript
            },
            {
                name: "TypeScript",
                url: "https://www.typescriptlang.org/",
                icon: Typescript
            },
            // {
            //     name: "Java",
            //     url: "https://www.java.com/",
            //     icon: Java
            // },
            // {
            //     name: "C#",
            //     url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
            //     icon: Cs
            // }
        ]
    },
    {
        icon: Console,
        name: "Frontend",
        technologies: [
            {
                name: "React",
                url: "https://reactjs.org/",
                icon: React
            },
            {
                name: "Astro",
                url: "https://astro.build/",
                icon: AstroIcon
            },
            {
                name: "Tailwind CSS",
                url: "https://tailwindcss.com/",
                icon: Tailwind
            },
            // {
            //     name: "Angular",
            //     url: "https://angular.io/",
            //     icon: Angular
            // }
        ]
    },
    {
        icon: BackendDev,
        name: "Backend",
        technologies: [
            {
                name: "Node.js",
                url: "https://nodejs.org/",
                icon: NodeJS
            },
            // {
            //     name: ".NET",
            //     url: "https://dotnet.microsoft.com/",
            //     icon: Dotnet
            // },
            // {
            //     name: "Spring Boot",
            //     url: "https://spring.io/projects/spring-boot",
            //     icon: SpringBoot
            // },
            {
                name: "PostgreSQL",
                url: "https://www.postgresql.org/",
                icon: PostgreSQL
            },
            {
                name: "NestJS",
                url: "https://nestjs.com/",
                icon: NestJS
            },
            // {
            //     name: "SQL Server",
            //     url: "https://www.microsoft.com/en-us/sql-server",
            //     icon: SQLServer
            // },
            {
                name: "MySQL",
                url: "https://www.mysql.com/",
                icon: MySQL
            },
            {
                name: "ExpressJS",
                url: "https://expressjs.com/",
                icon: ExpressJs
            }
        ]
    },
    {
        icon: Tools,
        name: "Herramientas",
        technologies: [
            {
                name: "Docker",
                url: "https://www.docker.com/",
                icon: Docker
            },
            {
                name: "Git",
                url: "https://git-scm.com/",
                icon: Git
            },
            {
                name: "Linux",
                url: "https://www.linux.org/",
                icon: Linux
            },
            {
                name: "Postman",
                url: "https://www.postman.com/",
                icon: Postman
            },
            {
                name: "GitHub Copilot",
                url: "https://github.com/features/copilot",
                icon: GithubCopilot
            }
        ]
    }

]