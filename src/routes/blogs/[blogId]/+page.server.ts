import {tailwindVsBootsrapBlog, nwBlog, statixBlog} from "$lib/blogs";

export async function load({ params }) {
    const blogId = params.blogId;

    let blog = tailwindVsBootsrapBlog;

    if (blogId === "statix") {
        blog = statixBlog;
    } else if (blogId === "nw-labs") {
        blog = nwBlog;
    }

    return {
        blog: blog
    };
}