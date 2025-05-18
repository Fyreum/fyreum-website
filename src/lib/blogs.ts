import type {Blog} from "$lib/types";
import statixPreview from "$lib/images/home/statix_homepage-3.png";
import nwPreview from "$lib/images/nw-website.png";
import tailwindwVsBootstrap from "$lib/images/blogs/tailwind-vs-bootstrap.png";

// Load metadata of all blog files
const blogFiles = import.meta.glob('./blogs/*.svelte', { eager: true });

export function getBlogModule(id: string) {
    // @ts-ignore
    return blogFiles['./blogs/' + id + '.svelte']?.default ?? null;
}

export const statixBlog: Blog = {
    id: "statix",
    author: "Luka Vogel",
    title: "Why Website Designs matter",
    previewImage: statixPreview,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.",
    date: new Date(2025, 1, 12),
    tags: [
        {
            id: "design",
            name: "Design",
            color: "gray"
        },
        {
            id: "web",
            name: "Web",
            color: "blue"
        }
    ],
};
export const nwBlog: Blog = {
    id: "nw-labs",
    author: "Luka Vogel",
    title: "NW Labs: Built for students",
    previewImage: nwPreview,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.",
    date: new Date(2025, 2, 15),
    tags: [
        {
            id: "design",
            name: "Design",
            color: "gray"
        },
        {
            id: "web",
            name: "Web",
            color: "blue"
        }
    ],
};
export const tailwindVsBootsrapBlog: Blog = {
    id: "tailwind-vs-bootstrap",
    author: "Luka Vogel",
    title: "TailwindCSS vs Bootstrap",
    previewImage: tailwindwVsBootstrap,
    description: "A practical comparison of TailwindCSS and Bootstrap, two popular CSS frameworks. This blog post explores their features, advantages, and disadvantages, helping you choose the right one for your next project.",
    date: new Date(2025, 5, 20),
    tags: [
        {
            id: "frameworks",
            name: "Frameworks",
            color: "gray"
        },
        {
            id: "css",
            name: "CSS",
            color: "purple"
        }
    ],
};

export const blogs = [
    statixBlog,
    nwBlog,
    tailwindVsBootsrapBlog,
]