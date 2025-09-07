import BinaryFile from "../components/icons/general/BinaryFile.astro";
import Css from "../components/icons/technologies/Css.astro";
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
            }
        ]
    }
]