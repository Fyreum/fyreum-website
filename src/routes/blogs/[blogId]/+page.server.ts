import {defaultBlog, nwBlog, statixBlog} from "$lib/blogs";

export async function load({ params }) {
    const blogId = params.blogId;

    let blog = defaultBlog;

    if (blogId === "statix") {
        blog = statixBlog;
    } else if (blogId === "nw-labs") {
        blog = nwBlog;
    }

    return {
        blog: blog
    };
}