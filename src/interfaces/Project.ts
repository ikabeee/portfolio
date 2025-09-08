export interface Project {
    title: string;
    duration: string;
    img: string;
    description: string;
    alt: string;
    codeSource: {
        api: string;
        web: string;
        mobile: string | null;
    };
    technologies: {
        name: string;
        icon: astroHTML.JSX.Element;

    }[];
}