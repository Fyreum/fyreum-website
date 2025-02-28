import type {Blog} from "$lib/types";
import statixPreview from "$lib/images/home/statix_homepage-2.png";
import nwPreview from "$lib/images/nw-website.png";
import preview from "$lib/images/mirado_preview.png";

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
export const defaultBlog: Blog = {
    id: "default",
    author: "Luka Vogel",
    title: "Blog Title",
    previewImage: preview,
    description: "",
    date: "12.02.2025"
};