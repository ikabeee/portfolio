export interface Job {
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    technologies: {
        name: string;
        icon: astroHTML.JSX.Element;
    }[];
    type: string;
}