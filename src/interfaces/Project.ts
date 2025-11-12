export interface Project {
    title: string;
    duration: string;
    img: string;
    description: string;
    alt: string;
    codeSource: {
        api?: string | null;
        web?: string | null;
        mobile?: string | null;
    };
    // Array opcional de imágenes para mostrar un overview/galería del proyecto
    objects?: string[];
    technologies: {
        name: string;
        icon: astroHTML.JSX.Element;

    }[];
}