export interface SkillGroup {
    icon:  astroHTML.JSX.Element;
    name: string;
    technologies: {
        name: string;
        url: string;
        icon:  astroHTML.JSX.Element;
    }[]; 
}