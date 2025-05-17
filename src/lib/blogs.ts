import type {Blog} from "$lib/types";
import statixPreview from "$lib/images/home/statix_homepage-3.png";
import nwPreview from "$lib/images/nw-website.png";
import tailwindwVsBootstrap from "$lib/images/blogs/tailwind-vs-bootstrap.png";

export const statixBlog: Blog = {
    id: "statix",
    author: "Luka Vogel",
    title: "Why Website Designs matter",
    previewImage: statixPreview,
    description: "",
    date: "12.02.2025"
};
export const nwBlog: Blog = {
    id: "nw-labs",
    author: "Luka Vogel",
    title: "NW Labs: Built for students",
    previewImage: nwPreview,
    description: "",
    date: "12.02.2025"
};
export const tailwindVsBootsrapBlog: Blog = {
    id: "tailwind-vs-bootstrap",
    author: "Luka Vogel",
    title: "TailwindCSS vs Bootstrap",
    previewImage: tailwindwVsBootstrap,
    description: "A practical comparison of TailwindCSS and Bootstrap, two popular CSS frameworks. This blog post explores their features, advantages, and disadvantages, helping you choose the right one for your next project.",
    date: "19.04.2025"
};